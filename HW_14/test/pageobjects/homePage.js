const Base = require('./Base');

class HomePage extends Base {
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
}

module.exports = new HomePage();