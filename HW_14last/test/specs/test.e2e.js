// const { describe, it } = require('mocha');
// const { expect } = require('chai');
const homePage = require('../pageobjects/homePage');
const headers = require('../pageobjects/headers');
const { browser } = require('webdriverio');
const base = require('../pageobjects/base')
const search = require('../pageobjects/search');

describe('Sila e2e tests', () => {
    browser.init();
    it('should click on the links in the header', async () => {
        await homePage.open();

        await headers.docsLink.click();
        await browser.waitUntil(async () => {
            const title = await browser.getTitle();
            return title.includes('Getting Started');
        });

        await headers.apiLink.click();
        await browser.waitUntil(async () => {
            const title = await browser.getTitle();
            return title.includes('Introduction');
        });

        await headers.blogLink.click();
        await browser.waitUntil(async () => {
            const isBlogLinkDisplayed = await headers.blogLink.isDisplayed();
            return isBlogLinkDisplayed;
        });

        await headers.contributeLink.click();
        await browser.waitUntil(async () => {
            const title = await browser.getTitle();
            return title.includes('Contribute');
        });
    });

    it('should click on the English link and then on Deutsch link', async () => {
        await homePage.open();
        await headers.englishLink.click();
        await headers.deutschLink.waitForClickable();
        await headers.deutschLink.click();

    });

    it('should click on the YouTube link and switch to a new window', async () => {
        await homePage.open();
        await headers.youtubeLink.click();
        const windowHandles = await browser.getWindowHandles();
        const newWindowHandle = windowHandles[1];
        const url = await browser.getUrl();
    });


    it('should click on the search button', async () => {
        // const hitContainerLocator = '.DocSearch-Hit-Container';
        await homePage.open();

        await search.searchButtonLink.click();
        await browser.keys('123');
        const hitContainer = $$(hitContainerLocator)[0];
        await search.hitContainerLocatorLink.click();


    });
});
