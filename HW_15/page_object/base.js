class Base {
    constructor(page) {
        this.page = page;
    }

    async navigate(url) {
        await this.page.goto(url);
    }

    async click(selector) {
        await this.page.click(selector);
    }

    async type(selector, text) {
        await this.page.type(selector, text);
    }

    async waitForSelector(selector) {
        await this.page.waitForSelector(selector);
    }

    async getText(selector) {
        return await this.page.textContent(selector);
    }
}

module.exports = Base;