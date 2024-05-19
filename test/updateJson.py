from selenium import webdriver
from selenium.webdriver.chrome.options import Options

# Set up Chrome options for headless browsing
chrome_options = Options()
chrome_options.add_argument("--headless")  # Enable headless mode
chrome_options.add_argument("--window-size=1920x1080")  # Set window size

# Path to chromedriver executable (update this path to match your own)
chromedriver_path = "/path/to/chromedriver"

# Initialize the Chrome webdriver with the specified options
driver = webdriver.Chrome(executable_path=chromedriver_path, options=chrome_options)

# Open Google
driver.get("https://www.google.com")

# Print the title of the page to verify it's Google
print("Page title:", driver.title)

# Close the webdriver
driver.quit()
