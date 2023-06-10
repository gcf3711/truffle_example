import os
import re
import json

def main():
    dict = {}
    total = 0
    path_result = "/home/yjj/mydir/truffle_example/elysium/"
    for dir in os.listdir(path_result):
        print(dir)
        result = {}
        try:
            with open(path_result + dir +"/result.txt","r") as infile:
                count = 0
                line = infile.readline()
                while line:
                    match = re.search(r"^(\d+)$",line)
                    if match:
                        index = match.group(1)
                        while ("gasUsed" not in line) and ("undefined" not in line):
                            line = infile.readline()
                        if "undefined" in line:
                            continue
                        else:
                            gasUsg = re.search(r"gasUsed: (.*),",line).group(1)
                            result[index] = gasUsg
                            count += 1
                            total += 1
                    line = infile.readline()
                result["count"] = count 
                dict[dir] = result
        except:
            pass

    with open("./after_statistics_elysium.json","w") as outfile:
        json.dump(dict,outfile)
    print(total)

if __name__ == '__main__':
    main()