class Base {
    navigate(url) {
        cy.visit(url)
    }

    clickElement(selector) {
        cy.get(selector)
            .should('exist')
            .should('be.visible')
            .click();
    }
}

module.exports = Base;