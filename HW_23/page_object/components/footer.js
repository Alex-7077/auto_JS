const Base = require('../base');
class Footer extends Base {

    get socialLinks() {
        return cy.get('.f-social__list a');
    }

}

module.exports = new Footer();