class PreWaiter {
    interceptAndWaitForRequests() {
        cy.log('Setting up intercept for catalogUpdate');
        cy.intercept('POST', 'https://5element.by/ajax/catalog_category_list.php*').as('catalogUpdate');
    }

    waitForRequestsToComplete() {
        cy.log('Waiting for @catalogUpdate to complete');
        cy.wait('@catalogUpdate', { timeout: 5000 }).then((interception) => {
            cy.log('Intercepted @catalogUpdate', interception);
            expect(interception.response.statusCode).to.be.within(200, 299);
        });
    }
}

module.exports = new PreWaiter();