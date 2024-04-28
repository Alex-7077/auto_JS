// const { describe, it } = require('mocha');
// const { expect } = require('chai');
const homePage = require('../pageobjects/homePage');

describe('Sila e2e tests', () => {
    it('should clicks are links on the header ', async () => {
        await homePage.navigate('https://webdriver.io/');

        const docsLink = await homePage.docsLink;
        await docsLink.waitForClickable({ timeout: 5000 });
        await docsLink.click();

        const apiLinkElement = homePage.apiLink;
        await apiLinkElement.waitForClickable({ timeout: 5000 });
        await apiLinkElement.click();

        const blogLinkElement = homePage.blogLink;
        await blogLinkElement.waitForClickable({ timeout: 5000 });
        await blogLinkElement.click();

        const contributeLinkElement = homePage.contributeLink;
        await contributeLinkElement.waitForClickable({ timeout: 5000 });
        await contributeLinkElement.click();

        // await browser.pause(5000);
    });
    it('should click on the English link', async () => {
        const englishLinkElement = homePage.englishLink;
        await englishLinkElement.waitForClickable({ timeout: 5000 });
        await englishLinkElement.click();
        const deutschLinkElement = await $('//a[contains(text(), "Deutsch")]');
        await deutschLinkElement.waitForClickable({ timeout: 5000 });
        await deutschLinkElement.click();
        await browser.pause(5000);
    });
    it('should click on the YouTube link', async () => {

        const youtubeLinkElement = await $('a[href="https://youtube.com/@webdriverio"]');
        await youtubeLinkElement.waitForClickable({ timeout: 5000 });
        await youtubeLinkElement.click();
        await browser.pause(2000);
        const windowHandles = await browser.getWindowHandles();
        const newWindowHandle = windowHandles[1];
        const url = await browser.getUrl();
    });
});
