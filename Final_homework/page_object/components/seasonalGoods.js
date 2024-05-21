const Base = require('../base');

class SeasonalGoods extends Base {

    get navBarCarouselElement() {
        return cy.get('.section.section--bg .section-heading .nav-bar.carousel-nav');
    }

}

module.exports = new SeasonalGoods();