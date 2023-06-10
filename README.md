## Etherscan爬取交易数据
//TODO
## 配置Truffle环境
//TODO
## 复现交易
终端1

```bash
docker exec -it y_sfuzz bash
cd 
truffle develop

#退出
.exit
```

truffle_example/temp/0x00A0cbe98E4D110b0Fa82646152D77Babf2951D0/migrations/1_deploy_contract.js

终端2

```bash
docker exec -it y_sfuzz bash
cd 
truffle migrate --network develop
truffle exec ./ERC20Tokentest.js --network develop > result.txt
```
## 二进制代码生成truffle可发布的json文件
> conda activate g_SCRepair

```bash
/bdata2/gcf/tosemr1/Elysium/get_truffle_json.ipynb
```
1. 生成的/bdata2/gcf/tosemr1/Elysium/SCRD_truffle_json/中的合约地址与/home/yjj/mydir/truffle_example/elysium/中的合约地址存在大小写字母不一致的差异，需要加字典数据进行映射。
2. 生成的SCRD数据集合约的migrations/1_deploy_contract.js文件大部分有错误，需要手动调整，有如下几种情况
    + 删重复语句
    + 手动拷贝truffle_json文件
        ```bash
        cd /home/yjj/mydir/truffle_example
        cp /bdata2/gcf/tosemr1/Elysium/SCRD_truffle_json/0xCB58A0bDdb9c972D1020d3F9e94C3401960A12d8/Crowdsale.json ./elysium/0xcb58a0bddb9c972d1020d3f9e94c3401960a12d8/build/contracts/
        ```
    + 手动拷贝其他相关合约的json文件
        ```bash
        cp before/0xc7d020d8c92d099b3ade17321310b4815ef20a90/build/contracts/EqualToken.json ./elysium/0xc7d020d8c92d099b3ade17321310b4815ef20a90/build/contracts/
        ```

```bash
/bdata2/gcf/tosemr1/Elysium/get_truffle_files.py
```



## 分析数据
+ 批量执行合约下的run.sh脚本
    ```bash
    python run.py
    ```

+ 提取发布合约消耗的gas数据
    ```bash
    python -u get_deploy_result.py >> get_delopy_result.log 2>&1
    ``` 
    生成：<br />
    get_delopy_result.log<br />
    elysuim_delopy_results.csv

+ 提取交易复现消耗的gas数据
    ```bash
    python get_results.py
    ```
    生成：<br />
    after_statistics_elysium.json

+ 分析前后交易gas消耗的不同
    ```bash
    python /home/yjj/mydir/truffle_example/data/python/analyse.py
    ```
    生成：<br />
    summary_elysium.json<br />
    difference_elysium.txt

+ gas差异数据，json转csv
    ```bash
    python json2csv.py
    ```
    生成：<br />
    summary_elysium.csv



