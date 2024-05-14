const Page = require('./page');

class SearchPage extends Page {
    get inputSearch() {
        return $('.fast-search__input');
    }

    get resultsItems() {
        return $$('.result__item.result__item_category');
    }

    async searchFor(item) {
        await this.inputSearch.waitForDisplayed();
        await this.inputSearch.setValue(item);
        await browser.pause(1000);

        async
        clickFirstResult()
        {
            await this.resultsItems[0].waitForDisplayed();
            const firstLink = await this.resultsItems[0].$('.category__title');
            await firstLink.click();
        }

        open()
        {
            return super.open('');
        }
    }
}
module.exports = new SearchPage();