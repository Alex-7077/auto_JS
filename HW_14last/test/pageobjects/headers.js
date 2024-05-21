class Headers {
    get docsLink() {
        return $('//a[contains(@class, "navbar__item") and contains(@class, "navbar__link") and text()="Docs"]');
    }

    get apiLink() {
        return $('//a[contains(@class, "navbar__item") and contains(@class, "navbar__link") and text()="API"]');
    }

    get blogLink() {
        return $('//a[contains(@class, "navbar__item") and contains(@class, "navbar__link") and text()="Blog"]');
    }

    get contributeLink() {
        return $('//a[contains(@class, "navbar__item") and contains(@class, "navbar__link") and text()="Contribute" and @href="/docs/contribute"]');
    }

    get englishLink() {
        return $('//a[contains(@class, "navbar__link") and text()="English"]');
    }

    get deutschLink() {
        return $('//a[contains(text(), "Deutsch")]');
    }
    get youtubeLink() {
        return $('a[href="https://youtube.com/@webdriverio"]');
    }
    get searchButtonLink() {
        return $('button.DocSearch.DocSearch-Button');
    }

    open() {
        super.navigate('https://webdriver.io/ ');
    }

    clickDocsLink() {
        this.docsLink.click();
    }

    clickApiLink() {
        this.apiLink.click();
    }

    clickBlogLink() {
        this.blogLink.click();
    }

    clickContributeLink() {
        this.contributeLink.click();
    }

    clickEnglishLink() {
        this.englishLink.click();
    }
}

module.exports = new Headers();