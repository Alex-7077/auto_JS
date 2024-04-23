const Base = require('./base');

class MainPage extends Base {
    constructor(page) {
        super(page);
    }

    async getDocsLink() {
        return await this.page.$('a.navbar__item.navbar__link[href="/docs/intro"]');
    }

    async getAPILink() {
        return await this.page.$('a.navbar__item.navbar__link[href="/docs/api/class-playwright"]');
    }

    async getNodeJsLink() {
        return await this.page.$('a.navbar__link[aria-haspopup="true"][aria-expanded="false"][role="button"]');
    }

    async getCommunityLink() {
        return await this.page.$('a.navbar__item.navbar__link[href="/community/welcome"]');
    }

    async getGitHubLink() {
        return await this.page.$('a.header-github-link[aria-label="GitHub repository"]');
    }

    async getGetStartedLink() {
        return await this.page.$('a.getStarted_Sjon');
    }

    async getTestConfigurationLink() {
        return await this.page.$('a.menu__link[href="/docs/test-configuration"]');
    }


}

module.exports = MainPage;