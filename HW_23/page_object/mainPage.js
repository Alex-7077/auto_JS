const Base = require('./base')

class MainPage extends Base {
    get heroSlider() {
        return cy.get('div.section.section--first div:nth-child(1) div.hero-row__slider div.carousel-slider.swiper-container-initialized.swiper-container-horizontal');
    }

}

module.exports = new MainPage();