import pandas as pd
from ast import literal_eval
from generate_script import truScriptGenerator
import numpy as np
import re
import os

class data_preprocessing:
    def __init__ (self, filelist:list, index:int):
        self.filelist = filelist
        self.index = index 
        self.ans = []

    def preprocessing(self):
        for i in range(len(self.filelist)):
            result = pd.read_csv("./" + str(self.index) + "/" + self.filelist[i] + "_result.csv", index_col=0)
            result1 = pd.read_csv("./" + str(self.index) + "/" + self.filelist[i] + "_from.csv", index_col=0, header=None)
            constructor = pd.read_csv("./constructor/" + str(self.index) + "/" + self.filelist[i] + "_constructor.csv", index_col=0, header=None)
            address = [] # count the number of address
            # iteritems is iterator for the column
            col = result["Args"]
            for j in range(0,col.size):
                if col[j] == []:
                    data = []
                else:
                    datas = literal_eval(col[j]) # change str into list
                    for data in datas:
                        dataType = data[0]
                        data = data[1]
                        if data == "" :
                            data = []
                        else:
                            if isinstance(data,str):
                                data = data.split("\n") # the type of elem in data is str
                                if data[-1] == "":
                                    data = data[:-1]
                            else:
                                raise Exception("{0} isn't a str".format(data))
                        if "address" in dataType:
                            address.extend(data)

            for index, col in result1.iteritems():
                if (index == 0):
                    continue
                for j in range(0,col.size):
                    col[j] = re.search("(0x.*)",col[j]).group(1)
                    if j == 0:
                        markdown_address = col[j]
                    data = col[j]
                    if pd.isna(col[j]):
                        data = []
                    else:
                        if isinstance(data,str):
                            data = [re.search("(0x.*)",data).group(1)]
                        else:
                            raise Exception("{0} isn't a str".format(data))
                    address.extend(data)

            for index, row in constructor.iterrows():
                if index == 0:
                    contractName = row[1]
                elif row.size == 1:
                    break
                else:
                    dataType = row[1]
                    data = row[2]
                    if dataType == "address":
                        address.append(data)
            for j in range(len(address)):
                address[j] = address[j].lower()
            address = list(np.unique(address))
            index = address.index(markdown_address.lower())
            temp = address[0]
            address[0] = address[index]
            address[index] = temp
            print(len(address))
            with open ("./address/"+ self.filelist[i]+"_address.txt","w") as outfile:
                for j in range(len(address)):
                    outfile.write("{0},{1}\n".format(j,address[j]))

            # write the script for truffle to launch 
            a = truScriptGenerator(address, contractName, result, result1, constructor,self.filelist[i])
            a.generate()
            self.ans.append([contractName,self.filelist[i]])
            self.cp_contract(filename=self.filelist[i])
            self.mk_shell(contractName=contractName,filename=self.filelist[i])

    def cp_contract(self, filename):
        os.system("cp ./sourcecode/"+ filename + ".sol " + "../"+ filename + "/contracts")
        

    def mk_shell(self, contractName, filename):
        print(contractName)
        os.system("touch ../" + filename + "/run.sh")
        with open("../" + filename + "/run.sh", "w") as outfile:
            outfile.write("#!/bin/bash\n")
            outfile.write("truffle compile\n")
            outfile.write("truffle migrate --network develop\n")
            outfile.write("truffle exec ./"+ contractName + "test.js --network develop > result.txt\n")
        
