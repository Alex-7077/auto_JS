const { Given, When, Then } = require('@wdio/cucumber-framework');
const MainPage = require('../pageobjects/page.js');
const ForumPage = require('../pageobjects/forum.js');

Given(/^I am on the main page$/, async () => {
    await MainPage.open();
});

When(/^I click on the "Форум" link$/, async () => {
    await MainPage.clickForum();
});

Then(/^I should see the "Форум" page title$/, async () => {
    const title = await ForumPage.getTitle();
    expect(title).toEqual('Форум');
});