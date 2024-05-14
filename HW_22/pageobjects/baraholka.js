class BaraholkaPage {
    get title() {
        return $('h1.m-title-i');
    }

    async getTitle() {
        await this.title.waitForDisplayed();
        return await this.title.getText();
    }
}

module.exports = new BaraholkaPage();