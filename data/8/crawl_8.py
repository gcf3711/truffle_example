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
links = ["0xE2fA3d7B292c216390AbAd4c625d5f2524B85A1f"
, "0xe4eabdca81e31d9acbc4af76b30f532b6ed7f3bf"
, "0xe649E289bc2A29E3C7bEEBD187BA3ee2B0cDC759"
, "0xe82f0742a71a02b9e9ffc142fdcb6eb1ed06fb87"
, "0xe894d54dca59cb53fe9cbc5155093605c7068220"
, "0xec329ffc97d75fe03428ae155fc7793431487f63"
, "0xEe045942b043B92cca0c454a553649EaA80873ea"
, "0xf015c35649c82f5467c9c74b7f28ee67665aad68"
, "0xf2570186500a46986f3139f65afedc2afe4f445d"
, "0xf29ebe930a539a60279ace72c707cba851a57707"
, "0xF4134146AF2d511Dd5EA8cDB1C4AC88C57D60404"
, "0xf4ac238121585456DeE1096fED287F4d8906D519"
, "0xf70d589d76eebdd7c12cc5eec99f8f6fa4233b9e"
, "0xF94d0b334b2CDEaAFCd7B2796B8743fb72dbFFF1"
, "0xFdB3c07c25F5a6879cC8b00685ed1A080c59615E"
, "0xfdEA2AD97EC5297090c8d945f25a15f17f4C283d"
, "0xFe4b3f29ad96f0422b873D47a9848E9920f9dEd7"
, "0xFf1560afEF58be59b11C72734ad1d89db63e4E71"
, "0x6994699c731dd7e389c209201ec51e8aff283bf9"
, "0xc7d020d8c92d099b3ade17321310b4815ef20a90"
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