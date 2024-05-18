const Base = require('../base');

class MainMenu extends Base {

    get carouselSliderElement() {
        return cy.get('.carousel-slider.swiper-container-initialized.swiper-container-horizontal.swiper-container-free-mode');
    }
    clickSmartphonesLink() {
        cy.get('a.nav-item[href="/catalog/377-smartfony"]').click();
    }

}

module.exports = new MainMenu();