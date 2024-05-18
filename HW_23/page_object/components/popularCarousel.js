const Base = require('../base');

class PopularCarousel extends Base {

    get carouselCategoriesElement() {
        return cy.get('.section.section--first .carousel-categories');
    }

}

module.exports = new PopularCarousel();