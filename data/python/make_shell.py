from data_preprocessing import data_preprocessing
import re
for index in range(1,10,1):
    with open("./" + str(index) + "/address.txt") as infile:
        filelist = infile.readlines()
    for i in range(len(filelist)):
        filelist[i] = re.sub("\n","",filelist[i])
    t = data_preprocessing(index=index,filelist=filelist)
    t.preprocessing()
