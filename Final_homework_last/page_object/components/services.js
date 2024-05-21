const Base = require('../base');

class Services extends Base {

    get navBarCarouselElement() {
        return cy.get('div:nth-child(6) div.section-heading div.nav-bar.carousel-nav');
    }

}

module.exports = new Services();