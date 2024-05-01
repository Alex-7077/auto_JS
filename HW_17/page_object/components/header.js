const Base = require('../base')

class Header {
    constructor(page) {
        this.page = page;
    }

    get docsLink() {
        return this.page.locator('a.navbar__item.navbar__link[href="/docs/intro"]');
    }

    get apiLink() {
        return this.page.locator('a.navbar__item.navbar__link.navbar__link--active[href="/docs/api/class-playwright"]');
    }

    get communityLink() {
        return this.page.locator('a.navbar__item.navbar__link[href="/community/welcome"]');
    }
    get nodeJsLink() {
        return this.page.locator('a.navbar__link[aria-haspopup="true"][aria-expanded="false"][role="button"][text="Node.js"]');
    }

    get languageDropdown() {
        return this.page.locator('.navbar__item.dropdown.dropdown--hoverable');
    }
    async waitForPlaywrightLibraryHeader() {
        return this.page.waitForSelector('h1:has-text("Playwright Library")');
    }

    async waitForWelcomeTitle() {
        return this.page.waitForSelector('h1:has-text("Welcome")');
    }

    async selectLanguage(language) {
        await this.languageDropdown.click();
        const languageLink = this.page.locator(`.dropdown__link:has-text("${language}")`);
        await languageLink.click();
        // await this.page.waitForNavigation();
    }
}

module.exports = Header;