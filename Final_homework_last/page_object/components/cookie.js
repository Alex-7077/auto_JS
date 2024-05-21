class CookiePopup {
    get closeButton() {
        return cy.get('button.js-cookie-popup-close.btn.btn--block', { timeout: 10000 });
    }

    waitAndClose() {
        this.closeButton.should('be.visible').click();
    }
}

module.exports = new CookiePopup();