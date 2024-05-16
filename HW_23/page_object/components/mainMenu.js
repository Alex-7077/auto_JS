const Base = require('../base');

class MainMenu extends Base {

    get carouselSliderElement() {
        return cy.get('.carousel-slider.swiper-container-initialized.swiper-container-horizontal.swiper-container-free-mode');
    }

}

module.exports = new MainMenu();