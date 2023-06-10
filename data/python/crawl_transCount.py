from time import sleep
from selenium.webdriver.edge.options import Options
from selenium import webdriver
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.common.by import By
import pandas as pd
import re


class transCount:
    def count(address:str)->int:
        options = Options()
        # options.add_argument("headless")
        # options.add_experimental_option('excludeSwitches', ['enable-automation'])
        options.add_argument('--disable-blink-features=AutomationControlled')
        driver = webdriver.Edge(options=options)
        actions = ActionChains(driver)

        driver.get("https://etherscan.io/address/"+address)
        sleep(1.2)
        # get all the transactions in web
        # driver.get_screenshot_as_file("1.png")
        text = driver.find_element(By.CSS_SELECTOR, ".d-md-flex > .mr-2").get_attribute("textContent")
        number = re.search("total of (.*) ",text).group(1)
        number = re.sub(",", "", number)
        return (int(number))
