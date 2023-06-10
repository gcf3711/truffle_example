from data_preprocessing import data_preprocessing
import re
import pandas as pd
count = 0
for index in range(1,10,1):
    with open("./" + str(index) + "/address.txt") as infile:
        filelist = infile.readlines()
    for i in range(len(filelist)):
        filelist[i] = re.sub("\n","",filelist[i])
    for i in range(len(filelist)):
        result = pd.read_csv("./" + str(index) + "/" + filelist[i] + "_from.csv", index_col=0, header=None)
        count += result.size
        print(count)
        
