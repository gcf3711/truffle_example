import csv
import json


def csv_to_json():
    files = dict()
    with open("sguard_pvd.csv",encoding='utf-8') as csv_file:
        csv_reader = csv.reader(csv_file, delimiter=",")
        file = ""
        for row in csv_reader:
            if row[0]:
                file = row[0].split(":")[0]
                files[file]={"ari": dict(), "reen": dict(), "tx":dict()}
            if row[2]:
                files[file][row[1].strip()][row[2].strip()] = ""

    with open("sguard_pvd.json", "w", encoding="utf-8") as json_file:
        json.dump(files,json_file,ensure_ascii=False)

def json_to_csv():
    data_write_to_csv = set()
    vul_type = {"ari":"arithmetic",
                "reen":"reentrancy",
                "tx":"tx-origin"}
    with open("sguard_pvd.json.json","r",encoding="utf-8") as json_file:
        data_csv = json.load(json_file)
        for file, vuls in data_csv.items():
            for vul,lines in vuls.items():
                for line, fn in lines.items():
                    data_write_to_csv.add(f"{str(file).split('/')[-1].split('.')[0]}&{fn}&{vul_type[vul]}")
    # print(data_write_to_csv)
    with open ('sguard_pvd.json.json.csv','w',encoding='utf-8',newline='') as fp:
        writer =csv.writer(fp)
        for d in data_write_to_csv:
            writer.writerow([d])

if __name__ == "__main__":
    with open ('summary_elysium.csv','w',encoding='utf-8',newline='') as fp:
        writer =csv.writer(fp)
        with open("summary_elysium.json","r",encoding="utf-8") as json_file:
            data_json = json.load(json_file)
            for addr,values in data_json.items():
                for num, gasList in values.items():
                    writer.writerow([addr,num]+gasList)

    

