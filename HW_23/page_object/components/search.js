const Base = require('../base');

class Search extends Base {
    get searchInput() {
        return cy.get('input[type="text"][name="q"][placeholder="Поиск товара"]').eq(1).click;
    }

    get searchButton() {
        return cy.get('button[type="submit"][aria-label="search"]').eq(1).click;
    }

}
module.exports = new Search();