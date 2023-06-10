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

def clicknext() -> bool:
    elem = driver.find_element(By.CSS_SELECTOR, ".pagination:nth-child(1) > .page-item:nth-child(4)")
    if "disabled" in elem.get_attribute("class"):
        return False
    elem.click()
    sleep(2)
    return True

links = ["0x6994699c731dd7e389c209201ec51e8aff283bf9"
, "0xc7d020d8c92d099b3ade17321310b4815ef20a90"
, "0xd113244b9049943d4bc6fef3048d24edf92dd788"
, "0x83b2fdc4b90706fbee7f4aaafb56356b6dbf25bd"
, "0xc8986ecd41fb420268f1f4285931379357c4142b"
, "0x87be69e5c196e0309cdf6957fd7141fda1df2b97"
, "0x169e59a41ba10600fddd1b0a72921f503b31d96b"
, "0xe07e687dc4b244d574f37490948c7f4aa921d958"
, "0x6459fe2c8d7c26c0011772310d8ca0f570f1d667"
, "0x5027880b5A4C5BBB88D229a334Aa8F31e6e67197"
, "0xcb58a0bddb9c972d1020d3f9e94c3401960a12d8"
, "0x6a57883b5748bf3631ac2e0d43bf0d6f6cbcd16b"
, "0x92033cc5d60de8fc01e7d4125713e05194989e1e"
, "0x0961375ed779fe16435d5d430da00a5bac527e46"
, "0x0a630de26e5B41eaef08741e74da4018A6C2E14c"
, "0x53CE47cbe7F2be0AEcD086a70182A98c907D024d"
, "0x79a198b2355ca2aef695d8a4987582e093911ebb"]

try: 
    for i in range(len(links)):
        driver.get("https://etherscan.io/address/"+links[i])
        sleep(2)
        # get all the transactions in web
        # driver.get_screenshot_as_file("1.png")
        driver.find_element(By.CSS_SELECTOR, ".mr-2 > a:nth-child(2)").click()
        sleep(1)
        try:
            driver.find_element(By.CSS_SELECTOR,"#btnCookie").click()
        except:
            pass
        sleep(2)
        table = []
        while True:
            count = len(driver.find_elements(By.CSS_SELECTOR, "tr .u-label--info"))
            for j in range(count):
                # get the method using in this transaction
                elem = driver.find_element(By.CSS_SELECTOR, "tr:nth-child("+str(j+1)+") > td:nth-child(7) a")
                actions.move_to_element(elem).perform()
                address = elem.get_attribute("data-original-title")
                if address is None:
                    address = elem.get_attribute("textContent")
                table.append(address)
                print("{0},{1}".format(address,j))
                # click into transaction details
                sleep(2)
            #next page or quit
            if clicknext()==False:
                break
        address = pd.DataFrame(data=table)
        address.to_csv(links[i]+"_from.csv",header=False,mode='a')
    driver.quit()
except:
    address = pd.DataFrame(data=table)
    address.to_csv(links[i]+"_from.csv",header=False,mode='a')