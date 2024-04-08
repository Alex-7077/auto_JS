const { Builder, By, Key, until } = require('selenium-webdriver');
const { describe, it, before, after } = require('mocha');

describe('ChromeDriver Website Tests', function() {
    let driver;

    before(async function() {
        driver = await new Builder().forBrowser('chrome').build();
    });

    after(async function() {
        await driver.quit();
    });

    it('navigate to Chrome Extensions', async function() {
        this.timeout(5000);

        await driver.get('https://chromedriver.chromium.org/home');

        let mainTitleElement = await driver.findElement(By.xpath("//span[contains(@class, 'Rn3Z1b')]"));
        let mainTitleText = await mainTitleElement.getText();
        if (mainTitleText === 'ChromeDriver') {
            console.log("passed");
        } else {
            console.error("error");
        }

        let chromeExtensionsLink = await driver.findElement(By.xpath("//a[contains(text(), 'Chrome Extensions')]"));
        await driver.executeScript("arguments[0].click()", chromeExtensionsLink);
        console.log("passed");

        let newMainTitleElement = await driver.findElement(By.xpath("//span[contains(@class, 'Rn3Z1b')]"));
        let newMainTitleText = await newMainTitleElement.getText();
        if (newMainTitleText === 'Chrome Extensions') {
            console.log("passed");
        } else {
            console.error("error");
        }

        let spanElement = await driver.findElement(By.xpath("//span[contains(@class, 'Rn3Z1b') and text()='Chrome Extensions']"));
        await driver.executeScript("arguments[0].style.color = 'green'", spanElement);
        console.log("Цвет текста элемента <span> с текстом 'Chrome Extensions' был изменен на зеленый.");
    });

    it('ssearch driver', function() {
        this.timeout(30000);

        return new Promise(async (resolve, reject) => {
            try {
                await driver.get('https://chromedriver.chromium.org/home');

                let searchIcon = await driver.findElement(By.css('div.U26fgb.mUbCce.fKz7Od.iWs3gf.Wdnjke.M9Bg4d[role="button"]'));
                await driver.executeScript("arguments[0].scrollIntoView(true);", searchIcon);
                await driver.wait(until.elementIsVisible(searchIcon), 5000);
                await searchIcon.click();
                console.log("passed");

                await new Promise(resolve => setTimeout(resolve, 2000));

                let searchInput = await driver.findElement(By.css('input.whsOnd.zHQkBf[jsname="YPqjbf"][tabindex="0"][role="combobox"]'));
                await searchInput.sendKeys('driver');

                let enteredText = await searchInput.getAttribute('value');
                console.log('Entered text:', enteredText);

                if (enteredText === 'driver') {
                    console.log("passed");
                } else {
                    console.log("Error");
                }

                let searchButton = await driver.findElement(By.css('div.U26fgb.mUbCce.fKz7Od.i3PoXe.M9Bg4d'));
                await searchButton.click();
                console.log("passed");

                try {
                    await driver.wait(until.stalenessOf(searchButton), 2000);
                } catch (error) {
                    console.log("passed", error);
                }

                let firstLink = await driver.findElement(By.css('div.yDWqEe'));
                let linkText = await firstLink.getText();

                if (linkText.toLowerCase().includes('driver')) {
                    console.log("= 'driver'.");
                } else {
                    console.log("Error: !='driver'.");
                }


                resolve();
            } catch (error) {
                reject(error);
            }
        });
    });

    it('https://chromedriver.chromium.org/home', function() {
        this.timeout(2000);

        return new Promise(async (resolve, reject) => {
            try {
                await driver.get('https://chromedriver.chromium.org/home');
                console.log("https://chromedriver.chromium.org/home.");

                await new Promise(resolve => setTimeout(resolve, 5000));


                let specificLink = await driver.findElement(By.css('a.aJHbb.dk90Ob.jgXgSe.HlqNPb:contains(\'Дополнительно\')'));
                await specificLink.click();
                console.log("passed");


                await new Promise(resolve => setTimeout(resolve, 5000));

                resolve();
            } catch (error) {
                reject(error);
            }
        });
        it('check url', function() {
            this.timeout(2000);

            return new Promise(async (resolve, reject) => {
                try {
                    await driver.get('https://chromedriver.chromium.org/home');
                    console.log("URL = https://chromedriver.chromium.org/home.");

                    // Wait for the page to load
                    await driver.wait(until.elementLocated(By.css('a.aJHbb.dk90Ob.jgXgSe.HlqNPb:contains(\'Дополнительно\')'), 5000);

                    // Clicking on the specific link
                    let specificLink = await driver.findElement(By.css('a.aJHbb.dk90Ob.jgXgSe.HlqNPb:contains(\'Дополнительно\')'));
                    await specificLink.click();
                    console.log("passed");

                    // Wait for the new page to load
                    await driver.wait(until.urlContains('/mobile-emulation'), 5000);

                    // Check if the URL contains '/mobile-emulation'
                    let currentUrl = await driver.getCurrentUrl();
                    if (currentUrl.includes('/mobile-emulation')) {
                        console.log("URL = '/mobile-emulation'. Test passed.");
                    } else {
                        console.log("URL != '/mobile-emulation'. Test failed.");
                    }

                    resolve();
                } catch (error) {
                    console.error("An error occurred:", error);
                    reject(error);
                }
            });
        });
    });







});
