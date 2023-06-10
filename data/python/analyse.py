import json
with open ("/home/yjj/mydir/truffle_example/data/before_statistics.json", "r") as infile:
    data1 = json.load(infile)
# with open ("./after_statistics_sguard.json", "r") as infile:
with open ("/home/yjj/mydir/truffle_example/after_statistics_elysium.json", "r") as infile:
    data2 = json.load(infile)
# iterate the before_statistics
miss_2 = []
ans = {}
data1:dict
data2:dict
dict1:dict
dict2:dict
count1 = 0
count2 = 0
with open("/home/yjj/mydir/truffle_example/difference_elysium.txt","w") as outfile:
    for key,value in data1.items(): 
        if key in data2.keys():
            dict1 = value
            dict2 = data2[key]
            dict = {}
            for number,gasusg in dict1.items():
                if number in dict2.keys():
                    dict[number] = [dict1[number],dict2[number],int(dict2[number])-int(dict1[number])]
                    if (int(dict2[number])-int(dict1[number])) != 0:
                        outfile.write("{0},{1},{2}\n".format(key,number,int(dict2[number])-int(dict1[number])))
                else:
                    dict[number] = [dict1[number], "missing"]
                    count1 += 1 
            for number,gasusg in dict2.items():
                if not(number in dict1.keys()):
                    dict[number] = ["missing", dict2[number]]
                    count2 += 1
            ans[key] = dict
        else:
            miss_2.append(key)
    outfile.write("after missing contracts : "+ str(miss_2) +"\n")
    outfile.write("{0},{1}\n".format(count1,count2))
with open ("/home/yjj/mydir/truffle_example/summary_elysium.json", "w") as outfile:
    json.dump(ans,outfile)

