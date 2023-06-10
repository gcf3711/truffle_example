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
links = ["0x294eE9f35988aF1ce361409Cee4251a293D21f5c"
, "0x2972d548497286d18e92b5fa1f8f9139e5653fd2"
, "0x2d6669c810bf1444D2e5e7f4cfC56a4c10cf7A2A"
, "0x2Eb9cC28c34c6d427AAC9F259ee5c4b33F1C4448"
, "0x30ceCB5461A449A90081F5a5F55db4e048397BAB"
, "0x30DdA19C0b94a88eD8784868Ec1e9375d9F0E27c"
, "0x332124F226e80c3AFdBb59271f550881b20604A1"
, "0x3501ECfa3f8b188915C72f36A93566585ba99336"
, "0x39cfd754c85023648bf003bea2dd498c5612abfa"
, "0x39D131bdD76e6D53FAbBBD5fa31E98F1d92b27AC"
, "0x3a0e9acd953ffc0dd18d63603488846a6b8b2b01"
, "0x3ac6cb00f5a44712022a51fbace4c7497f56ee31"
, "0x3AC96Bbe8b60D715fD818B3FE242EdF9dEF20571"
, "0x3e013fc32a54c4c5b6991ba539dcd0ec4355c859"
, "0x3f2ef511aa6e75231e4deafc7a3d2ecab3741de2"
, "0x3fe3D6f405b5858A320B33FbcB0Bea3b2C2eB7BE"
, "0x4051334adc52057aca763453820cb0e045076ef3"
, "0x42CEE7DD9B47C2ceE35ca996a712E8c99471d46f"
, "0x4320e6f8c05b27ab4707cd1f6d5ce6f3e4b3a5a1"
, "0x47427A4921bdF2b3ac75eCF53193A5265aF4a12F"
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