from datetime import datetime, timedelta, timezone
import re
import time

from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

url = f"https://stats.ncaa.org/season_divisions/18200/scoreboards?utf8=%E2%9C%93&season_division_id=&game_date={(datetime.now(timezone.utc)- timedelta(days=1)).strftime('%m %d %Y')}&conference_id=0&tournament_id=&commit=Submit".replace(' ', '%2F')


url = "https://stats.ncaa.org/season_divisions/18200/scoreboards?utf8=%E2%9C%93&season_division_id=&game_date=08%2F25%2F2023&conference_id=0&tournament_id=&commit=Submit"


chrome_options = Options()
chrome_options.add_argument("--no-sandbox")
chrome_options.add_argument("--disable-dev-shm-usage")
chrome_options.add_argument("--window-size=500,500")
# chrome_options.add_argument("--headless")

driver = webdriver.Chrome(options=chrome_options)
driver.get(url)


element = WebDriverWait(driver, 10).until(
    EC.presence_of_element_located((By.TAG_NAME, "table"))
)

game_ids = re.findall(r'class="skipMask" href="/contests/([0-9]+)/box_score">Box Score</a>', driver.page_source)


for i, id_ in enumerate(game_ids):
    print(id_)
    driver.get(f"https://stats.ncaa.org/contests/{id_}/box_score")
    element = driver.find_element(By.XPATH, "/html/body/div[2]/div[3]/div/div/ul/li[3]/a")
    element.click()
    element = driver.find_element(By.XPATH, '//*[@id="toggleAllPlaysLink"]')
    element.click()
    # if not i:
    #     print(driver.page_source)
    # input()

driver.quit()
