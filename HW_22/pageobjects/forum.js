class ForumPage {
    get title() {
        return $('h1.m-title');
    }

    async getTitle() {
        await this.title.waitForDisplayed();
        return await this.title.getText();
    }
}

module.exports = new ForumPage();