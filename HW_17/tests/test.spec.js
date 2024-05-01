const { test, expect } = require('@playwright/test');
const MainPage = require('../page_object/mainPage');
const Header = require('../page_object/components/header');
const Search = require('../page_object/components/search');




test.describe('smoke test', async function () {
    let mainPage;
    let header;
    let search;


    test.beforeEach(async ({page, context}) => {
        mainPage = new MainPage(page);
        header = new Header(page);
        search = new Search(page);

    });

    test.skip('Checking the main download link on the home page', async ({ page }) => {
        await mainPage.navigate('https://playwright.dev/');
        await mainPage.getStartedLink.click();
        const installationHeader = await mainPage.waitForInstallationHeader();
        expect(installationHeader).not.toBeNull();
        const currentUrl = page.url();
        expect(currentUrl).toContain('https://playwright.dev/docs/intro');
    });

    test.skip('Checking the main links in the header for functionality and content', async ({ page }) => {
        await mainPage.navigate('https://playwright.dev/');
        await header.docsLink.click();
        const docsUrl = page.url();
        expect(docsUrl).toBe('https://playwright.dev/docs/intro');
        const installationHeader = await mainPage.waitForInstallationHeader();
        expect(installationHeader).not.toBeNull();

        await header.apiLink.waitFor({ state: 'visible' });
        await header.apiLink.click();
        const apiUrl = page.url();
        expect(apiUrl).toBe('https://playwright.dev/docs/api/class-playwright');
        const playwrightLibraryHeader = await header.waitForPlaywrightLibraryHeader();
        expect(playwrightLibraryHeader).not.toBeNull();

        await header.communityLink.click();
        const communityUrl = page.url();
        expect(communityUrl).toBe('https://playwright.dev/community/welcome');
        await header.waitForWelcomeTitle();
        const welcomeTitleExists = await header.waitForWelcomeTitle();
        expect(welcomeTitleExists).not.toBeNull();
    });

    test.skip('Language selection dropdown check', async ({ page, context }) => {
        await mainPage.navigate('https://playwright.dev/');

        await header.selectLanguage('Python');
        const pythonUrl = await page.url();
        expect(pythonUrl).toContain('python');

        await header.selectLanguage('Java');
        const javaUrl = await page.url();
        expect(javaUrl).toContain('java');

        await header.selectLanguage('.NET');
        const dotNetUrl = await page.url();
        expect(dotNetUrl).toContain('dotnet');
    });

    test('Checking search field', async ({ page, context }) => {
        await mainPage.navigate('https://playwright.dev/');

        await search.searchInNavbar('PlaywrightAssertions');
        const searchResults = await page.$$(Search.searchResultLocator);

        const firstSearchResult = searchResults[0];
        await firstSearchResult.click();

        const pageText = await page.textContent('html');
        expect(pageText).toContain('PlaywrightAssertions');


    });

})
