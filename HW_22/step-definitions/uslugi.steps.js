const { Given, When, Then } = require('@wdio/cucumber-framework');
const MainPage = require('../pageobjects/page.js');
const UslugiPage = require('../pageobjects/uslugi.js');

Given(/^I am on the main page$/, async () => {
    await MainPage.open();
});

When(/^I click on the "Услуги" link$/, async () => {
    await MainPage.clickUslugi();
});

Then(/^I should see the "Услуги" page title$/, async () => {
    const title = await UslugiPage.getTitle();
    expect(title).toEqual('Заказы');
});