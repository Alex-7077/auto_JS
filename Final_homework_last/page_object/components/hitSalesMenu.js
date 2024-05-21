const Base = require('../base');

class HitSalesMenu extends Base {

    get secondNavItem() {
        return cy.get('.section.section--bg .section-heading .nav-bar.carousel-nav');
    }

}

module.exports = new HitSalesMenu();