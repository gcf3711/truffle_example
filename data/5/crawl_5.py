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
links = ["0x81A9eBFDCd87cd291Eb5e5260901A898dF3bdafd"
, "0x81d4703c5b3499B57397C999A72f492Fc681410D"
, "0x824D83318d9637715a491B6CBb0244f55c0D5bAf"
, "0x84d9ec85c9c568eb332b7226a8f826d897e0a4a8"
, "0x8505185D59CA2B1381A727C3429098C62B18E71a"
, "0x89c1b3807d4c67df034fffb62f3509561218d30b"
, "0x8c7777c45481dba411450c228cb692ac3d550344"
, "0x8EEb73BEFd9285d686d6Cf7649Ed657514a714CB"
, "0x8fd1e427396ddb511533cf9abdbebd0a7e08da35"
, "0x9107C1B28d775E59f98BF3f4dE3b959816CF5526"
, "0x93c32845fae42c83a70e5f06214c8433665c2ab5"
, "0x941d225236464a25eb18076df7da6a91d0f95e9e"
, "0x958a8f594101d2c0485a52319f29b2647f2ebc06"
, "0x95C9C35678C0B54008b1E3A2B0eA1730Fa7dBd06"
, "0x9653cFd0865ad8313BEA2f0C2EC0584BFd05115B"
, "0x96edbe868531bd23a6c05e9d0c424ea64fb1b78b"
, "0x9A7069c319E0052e071fcB437c8AA3343555dadC"
, "0x9B13F5260219282464893DBeaDb65000d75E8263"
, "0x9d06cbafa865037a01d322d3f4222fa3e04e5488"
, "0x9D5bd53fc23D6485A80B9879097E67a797365Ca5"
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