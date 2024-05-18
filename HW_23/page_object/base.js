class Base {
    navigate(url) {
        cy.visit(url)
    }

    clickElement(selector) {
        cy.get(selector)
            .should('exist')
            .and('be.visible')
            .invoke('click');
    }
}
module.exports = Base;