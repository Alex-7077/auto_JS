class Base {
    async navigate(url) {
        await browser.url(url);
    }

    async findElement(selector) {
        return await $(selector);
    }

    async clickElement(selector) {
        const element = await this.findElement(selector);
        await element.click();
    }

    async typeText(selector, text) {
        const element = await this.findElement(selector);
        await element.setValue(text);
    }

    async getText(selector) {
        const element = await this.findElement(selector);
        return await element.getText();
    }

    async waitForElement(selector, timeout) {
        const element = await this.findElement(selector);
        await element.waitForExist({ timeout });
    }

}

module.exports = Base;