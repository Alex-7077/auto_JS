const Base = require('./base');

class MainPage extends Base {
    constructor(page) {
        super(page);
    }

    get earthTitle() {
        return this.page.locator('.sc-e6d79fb3-2.huflns');
    }

    get getStartedLink() {
        return this.page.locator('.getStarted_Sjon[href="/docs/intro"]');
    }

    async waitForInstallationHeader() {
        return this.page.waitForSelector('h1:has-text("Installation")');
    }
}

module.exports = MainPage;