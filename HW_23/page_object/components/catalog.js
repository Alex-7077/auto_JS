const Base = require('../base');

class Catalog extends Base {

    get catalogButton() {
        return cy.get('button[type="button"].js-mm-opener');
    }

    get catalogWrap() {
        return 'div.catalog-navigation-list-wrap';
    }


    getSmartphonesLink() {
        return cy.get('.filter-body .filter-categories > li > a[href="/catalog/377-smartfony"]');
    }

    getAddToCartButton() {
        return cy.get('button[data-product_id="782619"][data-product_name="Смартфон HONOR X9a 8GB/256GB (зеленый)"][data-product_brand="HONOR"][data-product_price="799.00"][data-category_name="Смартфоны"]');
    }

    getGoToCartLink() {
        return cy.get('a[href="/cart"].btn.btn--block');
    }


    ClickElementByIndex(wrapperSelector, index) {
        const itemSelector = `${wrapperSelector} > ul > li`;

        cy.get('body').then(($body) => {
            if ($body.find(itemSelector).length > 0) {
                cy.get(itemSelector).eq(index).click();
            }
        });
    }
}

module.exports = new Catalog();