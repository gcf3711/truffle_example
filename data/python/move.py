import os
import re
import copy
filelist = os.listdir("../after")
list = copy.deepcopy(filelist)
for i in range(len(filelist)):
    filelist[i] = filelist[i].lower()

with open ("except.txt","w") as outfile:
    for file in os.listdir("./sourcecode_fixed_sguard"):
        filename = re.search(r"(0x.*?)\.",file).group(1).lower()

        if filename in filelist:
            index = filelist.index(filename)
            os.system("rm -rf ../after/"+ list[index] + "/contracts")
            os.system("mkdir ../after/"+ list[index] + "/contracts")
            os.system("cp ./sourcecode_fixed_sguard/" + file + " ../after/" + list[index] + "/contracts/")
        else:
            outfile.write(filename + "\n")

filelist = os.listdir("./sourcecode_fixed_sguard")
for i in range(len(filelist)):
    filelist[i] = re.search(r"(0x.*?)\.",filelist[i]).group(1).lower()

with open ("no_fixed.txt","w") as outfile:
    for file in os.listdir("../after"):
        if file.lower() not in filelist:
            os.system("rm -rf ../after/"+ file)
            outfile.write(file + "\n")
