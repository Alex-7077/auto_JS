class UslugiPage {
    get title() {
        return $('.service-header__title.service-header__title_huge');
    }

    async getTitle() {
        await this.title.waitForDisplayed();
        return await this.title.getText();
    }
}

module.exports = new UslugiPage();