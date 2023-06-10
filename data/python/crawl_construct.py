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
with open ("./transCount.txt","r") as infile:
    links = infile.readlines()

index = 1
count = 0
for i in range(len(links)):
    transCount = re.search("(.*) (.*)",links[i]).group(2)
    transCount = re.sub(",", "", transCount)
    if int(transCount) > 100000:
        continue
    link = re.search("(.*) (.*)",links[i]).group(1)
    driver.get("https://etherscan.io/address/"+link)
    sleep(2)
    try:
        driver.find_element(By.CSS_SELECTOR, "#ContentPlaceHolder1_li_contracts").click()
    except:
        pass
    sleep(1)
    try:
        driver.find_element(By.CSS_SELECTOR,"#btnCookie").click()
    except:
        pass
    sleep(2)
    args = []
    text = driver.find_element(By.CSS_SELECTOR, ".align-items-center > div.col-7.col-lg-8").get_attribute("textContent")
    text = re.sub("\n","",text)
    args.append([text])
    text = driver.find_element(By.CSS_SELECTOR, ".mb-4:nth-child(5) .card-header-title").get_attribute("textContent")
    if "Constructor Arguments" in text:
        content = driver.find_element(By.CSS_SELECTOR, ".mb-4:nth-child(5) > .wordwrap").get_attribute("textContent")
        argline = re.search(r"Decode.*Encode",content)
        argline = argline.group().split("Arg")
        for arg in argline[1:-1]:
            argtype = re.search(r"\((.*)\)", arg).group(1)
            argument = re.search(r"\(.*\): (.*)",arg).group(1)
            args.append([argtype,argument])
        arg = argline[-1]
        argtype = re.search(r"\((.*)\)", arg).group(1)
        argument = re.search(r"\(.*\): (.*?)-",arg).group(1)
        args.append([argtype,argument])
    else:
        args.append([None])
    args = pd.DataFrame(data=args)
    args.to_csv("./constructor/"+ str(index)+ "/" + link+"_constructor.csv",header=False)
    if count % 20 == 19:
        index += 1
    count += 1
driver.quit()
