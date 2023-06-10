from time import sleep
from selenium.webdriver.edge.options import Options
from selenium import webdriver
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.common.by import By
import pandas as pd
import re

options = Options()
# options.add_argument("headless")
# options.add_experimental_option('excludeSwitches', ['enable-automation'])
options.add_argument('--disable-blink-features=AutomationControlled')
driver = webdriver.Edge(options=options)
actions = ActionChains(driver)

def clickpre() -> bool:
    try:
        elem = driver.find_element(By.CSS_SELECTOR, ".pagination:nth-child(1) > .page-item:nth-child(2)")
    except:
        return False
    if "disabled" in elem.get_attribute("class"):
        return False
    elem.click()
    sleep(2)
    return True
links = ["0xb93430ce38ac4a6bb47fb1fc085ea669353fd89e"
, "0xB939C757bdFC75E28E1ae2b8c1a4640180B6087E"
, "0xbaa3de6504690efb064420d89e871c27065cdd52"
, "0xbaf51e761510c1a11bf48dd87c0307ac8a8c8a4f"
, "0xbe4041d55db380c5ae9d4a9b9703f1ed4e7e3888"
, "0xbebbfe5b549f5db6e6c78ca97cac19d1fb03082c"
, "0xC1ca4E6FA2d888168a34a3429Bf186BcD9b475A0"
, "0xC1E2097d788d33701BA3Cc2773BF67155ec93FC4"
, "0xc524079859fD32597F257c175c5f9E239C1Dd2DB"
, "0xc52694E7832594F2AaF2536c777024fb5C1AE9Da"
, "0xc6689EB9a6D724B8D7B1d923fFd65B7005dA1b62"
, "0xcead721ef5b11f1a7b530171aab69b16c5e66b6e"
, "0xd2018bfaa266a9ec0a1a84b061640faa009def76"
, "0xd5967fed03e85d1cce44cab284695b41bc675b5c"
, "0xdb1c55f6926e7d847ddf8678905ad871a68199d2"
, "0xDe39E5E5a1B0eEB3Afe717D6d011CaE88D19451e"
, "0xDf07Fa1b102c00124E96F18Ea612bbbe553f50e1"
, "0xdFF8e7f5496D1e1A4Af3497Cb4712017a9C65442"
, "0xe09b1ab8111c2729a76f16de96bc86a7af837928"
, "0xE2E6D4BE086c6938B53B22144855eef674281639"
]

# links = ["0xc7d020d8c92d099b3ade17321310b4815ef20a90"]

try: 
    for i in range(len(links)):
        driver.get("https://etherscan.io/address/"+links[i])
        sleep(1.2)
        # get all the transactions in web
        # driver.get_screenshot_as_file("1.png")
        driver.set_window_size(1080,840)
        try: 
            driver.find_element(By.CSS_SELECTOR, "#btnCookie").click()
        except:
            pass
        try:
            elem = driver.find_element(By.CSS_SELECTOR, ".mr-2 > a:nth-child(2)")
            actions.move_to_element(elem).click().perform()
            sleep(1)
        except:
            pass
        try:
            elem= driver.find_element(By.CSS_SELECTOR, ".pagination:nth-child(1) > .page-item:nth-child(5) > .page-link")
            actions.move_to_element(elem).click().perform()
            sleep(1)
        except:
            pass

        # num = 1250
        # for j in range(num//50):
        #     clicknext()
        output = []
        table = []
        times = 0
        while True:
            count = len(driver.find_elements(By.CSS_SELECTOR, "tr .u-label--info"))
            for j in range(count, 0, -1):
                # crawl_from
                detail = {}
                elem = driver.find_element(By.CSS_SELECTOR, "tr:nth-child("+str(j)+") > td:nth-child(7) a")
                actions.move_to_element(elem).perform()
                address = elem.get_attribute("data-original-title")
                if address is None:
                    address = elem.get_attribute("textContent")
                table.append(address)
                # print("{0},{1}".format(address,j))
                # get method name (temp)
                elem = driver.find_element(By.CSS_SELECTOR, "tr:nth-child("+str(j)+") .u-label--info")
                actions.move_to_element(elem).perform()
                method = elem.get_attribute("data-original-title")
                # click into transaction details
                elem = driver.find_element(By.CSS_SELECTOR, "tr:nth-child("+str(j)+") .myFnExpandBox_searchVal")
                actions.move_to_element(elem).click().perform()
                sleep(1.2)
                # click to open the arguments details
                driver.find_element(By.CSS_SELECTOR,"#collapsedLink > span").click()
                sleep(1.2)
                # get limit
                text = driver.find_element(By.CSS_SELECTOR, "#ContentPlaceHolder1_spanGasLimit").get_attribute("textContent")
                text = re.sub("[\n,]","",text)
                detail["GasLimit"] = text
                # get usage
                text = driver.find_element(By.CSS_SELECTOR, "#ContentPlaceHolder1_spanGasUsedByTxn").get_attribute("textContent")
                text = re.sub("[\n,]","",text)
                detail["GasUsage"] = text
                # get value
                text = driver.find_element(By.CSS_SELECTOR, "#ContentPlaceHolder1_spanValue").get_attribute("textContent")
                detail["Value"] = text
                # get method name 
                text = driver.find_element(By.CSS_SELECTOR, "#inputdata").get_attribute("textContent")
                if "Function" in text:
                    try:
                        method = re.search("Function: (.*)\(",text).group(1)
                    except:
                        pass
                elif method == "0x60606040":
                    method = "constructor"
                print(method,j)
                detail["Method"] = method
                # use actionchains to click something that "Element is not clickable at point" , scroll the screen to make the buttom clickable
                # click to format the arguments
                try:
                    elem = driver.find_element(By.CSS_SELECTOR,"#ContentPlaceHolder1_btnDecodetab")
                    actions.scroll_to_element(elem).move_to_element(elem).click().perform()
                    sleep(1.3)
                except:
                    pass
                # markdown the arguments
                elem1s = driver.find_elements(By.CSS_SELECTOR,"tr > td:nth-child(3)")
                elem2s = driver.find_elements(By.CSS_SELECTOR,"tr > td:nth-child(4)")
                arguments = []
                for elem1,elem2 in zip(elem1s,elem2s):
                    text1 = elem1.get_attribute("textContent")
                    text2 = elem2.get_attribute("innerHTML")
                    text2 = re.sub(r'<br>',"\n",text2)
                    text2 = re.sub(r'<.*?>',"",text2)
                    arguments.append([text1,text2])
                detail["Args"] = arguments
                # print(arguments)
                output.append(detail)
                driver.back()
                sleep(1)
            sleep(2)
            times += 1
            #next page or quit
            if clickpre()==False or times == 7:
                break
        
        output = pd.DataFrame(data=output)
        output.to_csv(links[i]+"_result.csv",mode='a')
        address = pd.DataFrame(data=table)
        address.to_csv(links[i]+"_from.csv",header=False,mode='a')
    driver.quit()
except:
    output = pd.DataFrame(data=output)
    output.to_csv(links[i]+"_result.csv",header=False,mode='a')
    address = pd.DataFrame(data=table)
    address.to_csv(links[i]+"_from.csv",header=False,mode='a')