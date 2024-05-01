const Base = require('../base')

class Search {
    constructor(page) {
        this.page = page;
    }

    get docsSearchLink() {
        return this.page.selector('.DocSearch-Hit-Container');
    }

    static get searchResultLocator() {
        return '.DocSearch-Hit-Container';
    }

    async searchInNavbar(text) {
        await this.page.click('.navbarSearchContainer_Bca1 .DocSearch-Button');
        await this.page.waitForSelector('.DocSearch-Input');
        await this.page.fill('.DocSearch-Input', text);
        await this.page.press('.DocSearch-Input', 'ArrowDown'); // Нажатие клавиши "вниз"
        await this.page.waitForSelector('.DocSearch-Hit-Container');
    }
}

module.exports = Search;