import pandas as pd
from ast import literal_eval
import re
import os
class truScriptGenerator:
    def __init__(self, address :list, contractName:str, details:pd.DataFrame, from_details:pd.DataFrame, constructor:pd.DataFrame, addr:str) -> None:
        self.address = address
        self.contractName = contractName
        # dataFrame use [] to index column ,use iloc() to index row ,loc() to index by label
        self.details = details
        self.from_details = from_details
        self.constructor = constructor.drop(index=[0])
        self.addr = addr
        # for i in range(self.from_details.size):
            # self.from_details = re.search("0x")

        print(self.constructor)

    def generate_config(self):
        with open("../" + self.addr +"/truffle-config.js","w")as out:
            out.write("module.exports = {\n")
            out.write("  networks: {\n")
            out.write("    develop:{\n")
            out.write("      host: \"127.0.0.1\",\n")
            out.write("      network_id: 5777,\n")
            out.write("      port: 9545,\n")
            out.write("      accounts: "+ str(len(self.address)+1) + ",\n")
            out.write("      skipDryRun: true\n")
            out.write("    }\n")
            out.write("  },\n")
            out.write("  mocha: {\n")
            out.write("  },\n")
            out.write("  compilers: {\n")
            out.write("    solc: {\n")
            out.write("      version: \"0.4.25\",\n") 
            out.write("    }\n")
            out.write("  },\n")
            out.write("};\n")
  
    def generate(self):
        # os.system("mkdir ../" + self.addr)
        # os.system("mkdir ../" + self.addr + "/test")
        # os.system("mkdir ../" + self.addr + "/migrations")
        # os.system("mkdir ../" + self.addr + "/contracts")
        self.generate_config()
        self.construct()
        with open("../" + self.addr +"/" + self.contractName+"test.js","w")as outfile:
            outfile.write("const "+self.contractName+" = artifacts.require(\""+self.contractName+"\")\n")
            outfile.write("module.exports = async function(callback) {\n")
            outfile.write("  try {\n")
            outfile.write("    await web3.eth.getAccounts().then(function (acc){accounts = acc})\n")
            outfile.write("    result = []\n")
            #outfile.write("    console.log(instance.address)\n")
            for j in range(self.details["Args"].size):
                arguments = literal_eval(self.details["Args"][j])
                method = self.details["Method"][j]
                from_address = self.from_details[1][j]
                if method == "constructor" or  "0x60" in method or j == 0:
                    outfile.write("    instance = await " + self.contractName + ".deployed()\n")
                    outfile.write("    address = await "+ self.contractName + ".address\n")
                else:
                    outfile.write("    try{\n")
                    if method == "Transfer":
                        index = self.address.index(self.from_details[1][j].lower())
                        # print(self.contractName,j)
                        if "Ether" in self.details["Value"][j]:
                            value = re.search("(.*) Ether", self.details["Value"][j]).group(1)
                            string = "      result[" + str(j) + "] = await web3.eth.sendTransaction({to: address, from: accounts[" + str(index) + "], value: web3.utils.toWei(\"" + value + "\")})"
                        elif "Wei" in self.details["Value"][j]:
                            value = re.search("(.*) Wei", self.details["Value"][j]).group(1)
                            string = "      result[" + str(j) + "] = await web3.eth.sendTransaction({to: address, from: accounts[" + str(index) + "], value: web3.utils.toBN(\""+ value +"\")})"
                        outfile.write(string+"\n")

                    else:
                        string = "      result[" + str(j) + "] = await instance." + method + "("
                        for list in arguments:
                            temp = ""
                            if list == []:
                                datas = ""
                                dataType = ""
                            else:
                                dataType = list[0]
                                datas = list[1]
                                if dataType == "":
                                    continue
                                if datas == "":
                                    if dataType == "bool":
                                        string += "false"
                                    elif "[]" in dataType:
                                        string += "[]"
                                    elif dataType == string or "bytes" in dataType:
                                        string += ""

                                else:
                                    if isinstance(datas,str):
                                        datas = datas.split("\n") # the type of elem in data is str
                                        if datas[-1] == "":
                                            datas = datas[:-1]
                                    else:
                                        raise Exception("{0} isn't a str".format(data))

                                    if "address" in dataType:
                                        if "[]" in dataType:
                                            temp = "["
                                            for data in datas:
                                                index = self.address.index(data.lower())
                                                temp += "accounts["+str(index)+"], "
                                            temp = temp[:-2]
                                            temp += "]"
                                        else:
                                            datas = datas[0]
                                            index = self.address.index(datas.lower())
                                            temp += "accounts["+str(index)+"]"
                                    else:
                                        if "[]" in dataType:
                                            temp = "["
                                            for data in datas:
                                                if "int" in dataType:
                                                    temp += "web3.utils.toBN(\"" + str(data) + "\"), "
                                                elif dataType == "string" or "bytes" in dataType:
                                                    temp += "\"" + data + "\", "
                                                else:
                                                    temp += data+", "
                                            temp = temp[:-2]
                                            temp += "]"
                                        else:
                                            data = datas[0]
                                            if "int" in dataType:
                                               temp += "web3.utils.toBN(\"" + str(data) + "\")"
                                            elif dataType == "string" or "bytes" in dataType:
                                                temp += "\"" + data + "\""
                                            else:
                                                temp += data
                                string += temp +", "
                        index = self.address.index(self.from_details[1][j].lower())
                        string += "{from: accounts["+str(index)+"]"
                        if "Ether" in self.details["Value"][j]:
                            value = re.search("(.*) Ether", self.details["Value"][j]).group(1)
                            string += ", value: web3.utils.toWei(\"" + value + "\")"
                        elif "Wei" in self.details["Value"][j]:
                            value = re.search("(.*) Wei", self.details["Value"][j]).group(1)
                            string += ", value: web3.utils.toBN(\""+ value +"\")"
                        string += "})\n"
                        outfile.write(string)
                    if j != 0:
                        outfile.write("    console.log(\""+str(j) + "\")\n")
                        outfile.write("    console.log(result[" + str(j) + "])\n")
                    outfile.write("    }\n")
                    outfile.write("    catch(error){\n")
                    outfile.write("      console.log(error)\n")
                    outfile.write("    };\n")
                    
                    
                    
            # for count, row in self.details.iterrows():
            #     if count == 0:
            #         continue
            #     outfile.write("    console.log(result[" + str(count) + "])\n")
            
            outfile.write("  }\n")
            outfile.write("catch(error) {\n")
            outfile.write("console.log(error)\n")
            outfile.write("  }\n")
            outfile.write("  callback()\n")
            outfile.write("}\n")

    def construct(self):
        with open ("../"+ self.addr + "/migrations/1_deploy_contract.js", "w")as outfile:
        # with open ("./1_deploy_contract.js", "w")as outfile:
            string = ""
            outfile.write("const " + self.contractName + " = artifacts.require(\"" + self.contractName + "\");\n")
            outfile.write("module.exports = function(deployer, network, accounts) {\n")
            outfile.write("deployer.deploy(" + self.contractName )
            string = ", "
            for index,row in self.constructor.iterrows():
                if row.size > 1 :
                    if row[1] == "address":
                        index = self.address.index(row[2].lower())
                        string += "accounts["+str(index)+"], "
                    elif row[1] == "string":
                        string += "\"" + str(row[2])+"\", "
                    elif "int" in row[1]:
                        string += "web3.utils.toBN(\"" + str(row[2]) +"\"), "
                    else:
                        string += str(row[2])+", "
            string = string[:-2]
            outfile.write(string + ")\n")        
            outfile.write("};\n")



