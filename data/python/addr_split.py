import pandas as pd
import re

links = pd.read_csv("./PVD_address.csv", header=None)
links = list(links[0])

count = 0
index = 0
temp = []
with open ("./transCount.txt","r") as infile:
    links = infile.readlines()

for i in range(len(links)):
    transCount = re.search("(.*) (.*)",links[i]).group(2)
    transCount = re.sub(",", "", transCount)
    if int(transCount) > 100000:
        continue
    link = re.search("(.*) (.*)",links[i]).group(1)
    temp.append(link)
    if (count % 20) == 19:
        index += 1
        with open("./python/"+ str(index) +"/crawl_" + str(index) + ".py","w") as outfile, open("./python/crawl.py","r") as infile:
            # 1. copy the file cralw.py
            line = infile.readline()
            line_count = 0
            while line:
                line_count += 1
                if line_count == 26:
                    outfile.write("links = [")
                    for j in range(len(temp)):
                        if j != 0:
                            outfile.write(", ")
                        outfile.write("\"" + str(temp[j]) + "\"\n")
                    outfile.write("]\n")
                outfile.write(line)
                line = infile.readline()
        with open("./python/"+ str(index) +"/address.txt","w") as outfile:
            for link in temp:
                outfile.write(link + "\n")
        temp = []
    count += 1   
        
        
index += 1
with open("./python/"+ str(index) +"/crawl_" + str(index) + ".py","w") as outfile, open("./python/crawl.py","r") as infile:
    # 1. copy the file cralw.py
    line = infile.readline()
    line_count = 0
    while line:
        line_count += 1
        if line_count == 26:
            outfile.write("links = [")
            for j in range(len(temp)):
                if j != 0:
                    outfile.write(", ")
                outfile.write("\"" + str(temp[j]) + "\"\n")
            outfile.write("]")
        outfile.write(line)
        line = infile.readline()
with open("./python/"+ str(index) +"/address.txt", "w") as outfile:
    for link in temp:
        outfile.write(link + "\n")
temp = []