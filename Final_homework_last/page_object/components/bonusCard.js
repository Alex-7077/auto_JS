class BonusCard {

    get bonusLink() {
        return cy.get('a.h-nav__link.bonus-link-secondary').eq(1)
    }

    clickBonusLink() {
        cy.get(this.bonusLink).should('exist').and('be.visible').click({force: true});
    }
}

module.exports = new BonusCard();