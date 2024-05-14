const { Given, When, Then } = require('@wdio/cucumber-framework');
const SearchPage = require('../pageobjects/search.page');

Given(/^I am on the Onliner homepage$/, async () => {
    await SearchPage.open();
});

When(/^I search for "([^"]*)"$/, async (item) => {
    await SearchPage.searchFor(item);
});

Then(/^I should see "([^"]*)" in the results$/, async (item) => {
    const titles = await SearchPage.getResultTitles();
    const found = titles.some(title => title.includes(item));
    expect(found).toBe(true);
});
