const { test, expect } = require('@playwright/test');
const MainPage = require('../page_object/mainPage');

// test('Поиск на главной странице', async ({ page }) => {
//     const mainPage = new MainPage(page);
//
//     await mainPage.navigate('https://www.example.com');
//
//     await mainPage.search('Example');
//
//     const searchResults = await mainPage.getSearchResults();
//
//     expect(searchResults).toContain('Example');
// });

test('check headers links', async ({ page }) => {
    const mainPage = new MainPage(page);

    await mainPage.navigate('https://playwright.dev/');

    const docsLink = await mainPage.getDocsLink();
    await docsLink.click();

    const apiLink = await mainPage.getAPILink();
    await apiLink.click();

    const nodeJsLink = await mainPage.getNodeJsLink();
    await nodeJsLink.click();

    const communityLink = await mainPage.getCommunityLink();
    await communityLink.click();

    const url = page.url();
    expect(url).toContain('community');
});
test('check navigation menu', async ({ page }) => {
    const mainPage = new MainPage(page);

    await mainPage.navigate('https://playwright.dev/');

    const getStartedLink = await mainPage.getGetStartedLink();
    await getStartedLink.click();

    const testConfigurationLink = await mainPage.getTestConfigurationLink();
    await testConfigurationLink.click();

    const pageTitle = await mainPage.page.title();
    expect(pageTitle).toContain('Test configuration');
});

test('check relation with others site', async ({ page }) => {
    const mainPage = new MainPage(page);

    await mainPage.navigate('https://playwright.dev/');

    const gitHubLink = await mainPage.getGitHubLink();
    await gitHubLink.click();

    const newPage = await page.waitForEvent('popup');
    await newPage.waitForLoadState('domcontentloaded');

    const url = newPage.url();
    expect(url).toContain('github.com');
});

