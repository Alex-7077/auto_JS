const Base = require('../base');

class Cart {
    getCartIconWithItemCount() {
        return cy.get('.n-item__icon.ic-cart span');
    }

}


module.exports = new Cart();