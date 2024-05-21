class Waiter {
    waitForCatalogUpdate() {
        Cypress.Commands.add('waitForCatalogUpdate', (catalogItemLink) => {

            cy.document().should(doc => {
                expect(doc.readyState).to.eq('complete');
            });

            cy.get('.loading-spinner', { timeout: 10000 }).should('not.exist');

            cy.get(catalogItemLink, { timeout: 10000 }).should('not.be.empty');

            const addToCartButtonSelector = 'button.c-cart.ec-add-to-cart';
            cy.get(addToCartButtonSelector, { timeout: 10000 }).should('be.visible').and('not.be.disabled');
        });
    }
}

module.exports = new Waiter();

