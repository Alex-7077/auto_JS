const Base = require('../base');

class Cart {
    getCartIconWithItemCount() {
        return cy.get('.n-item__icon.ic-cart span');
    }

    clickCartIcon() {
        return cy.get('.h-bar .h-added-drop .n-item .n-item__icon.ic-cart').eq(0).click();
    }

    getInputCounterValue() {
        return cy.get('input.input-counter-field[data-v-c346a2b4=""]');
    }

    clickMinusButton() {
        return cy.get('button.input-counter-btn[data-type="minus"][data-field="counter-cart-1"]').click();
    }

    clickPlusButton() {
        return cy.get('button.input-counter-btn[data-type="plus"][data-field="counter-cart-1"]').click();
    }
    clickRemoveSelected() {
        return cy.get('a[data-v-c346a2b4=""][href="#"]').contains('Удалить выбранное').click();
    }
    getCartMainSection() {
        return cy.get('#cart-g-main > div.shopping-cart > div:nth-child(2) > div > div > div.shopping-grid__main > div.section.section--first > div > div.section-product-body');
    }

    isCartMainSectionNotExist() {
        return this.getCartMainSection().should('not.exist');
    }

    clickPlusButtonMultipleTimes(times) {
        Cypress._.times(times, () => {
            this.clickPlusButton();
        });

    }
    clickMinusButtonMultipleTimes(times) {
        Cypress._.times(times, () => {
            this.clickMinusButton();
        });
    }
}
module.exports = new Cart();