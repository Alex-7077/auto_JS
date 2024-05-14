const { Given, When, Then } = require('@wdio/cucumber-framework');
const MainPage = require('../pageobjects/page.js');
const BaraholkaPage = require('../pageobjects/baraholka.js');

Given(/^I am on the main page$/, async () => {
    await MainPage.open();
});

When(/^I click on the "Барахолка" link$/, async () => {
    await MainPage.clickBaraholka();
});

Then(/^I should see the "Барахолка" page title$/, async () => {
    const title = await BaraholkaPage.getTitle();
    expect(title).toEqual('Барахолка');
});