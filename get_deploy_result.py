import os
import re
import pandas as pd


path_result = "/home/yjj/mydir/truffle_example/elysium"
gas_used = {"address":[],"deploy_gas_used":[]}

# for root,dirs,files in os.walk(path_result):
#     for dir in dirs:
for dir in os.listdir(path_result):
    result_deploy_path = os.path.join(os.path.join(path_result,dir),"result_deploy.txt")
    if not os.path.exists(result_deploy_path):
        print("no result_deploy.txt file: {0}".format(result_deploy_path))
    with open(result_deploy_path,"r",encoding="utf-8") as f:
        success_deployed = False
        for line in f:
            gas_deploy = re.match(".*gas used:\s+(\d+)\s\(.*",line)
            if gas_deploy == None:
                continue
            else:
                gas_used["address"].append(dir)
                gas_used["deploy_gas_used"].append(gas_deploy[1])
                success_deployed = True
        if not success_deployed:
            print("no gas used:{0}".format(result_deploy_path))

data = pd.DataFrame(gas_used)
data.to_csv("elysium_deploy_results.csv",index=False)
