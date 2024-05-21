const Base = require('../base');
const { brandMap, storageMap, ramMap } = require('../../helpers/constants');

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

    get itemSelector() {
        return 'ul > li';
    }

    get compareButtonSelector() {
        return 'button[title="В сравнение"]';
    }

    get activeCompareButtonSelector() {
        return cy.get('.n-item__icon.ic-compare').eq(0).click();
    }

    get goToCompareLinkSelector() {
        return cy.get('a[href="/compare"].btn--index').click();
    }

    get productCardSelector() {
        return cy.get('.card-product.ec-product-item');
    }


    get catalogItemLink() {
        return {
            container: cy.get('div.c-part'),
            showAllPromotionsButton: () => cy.get('div.c-part > div.c-marks > button[title="Показать все акции"]'),
            discountItem: () => cy.get('div.c-part > div.c-marks > div.c-marks__item'),
            productLink: () => cy.get('div.c-part > a.c-text'),
            inStockStatus: () => cy.get('div.c-part > div.c-status.in-stock'),
            rating: () => cy.get('div.c-part > div.c-rating'),
            productDetails: () => cy.get('div.c-part > div.c-details'),
            deliveryInfo: () => cy.get('div.c-part > div.c-delivery')
        };
    }

    get filter1() {
        return '#filter-692695 > div input[type="checkbox"]';
    }

    get filter2() {
        return '#filter-678373 > div input[type="checkbox"]';
    }
    get filter3() {
        return 'div#filter-726606 input[type="checkbox"].ec_filter';
    }

    clickElementByIndex(wrapperSelector, index) {
        const itemSelector = `${wrapperSelector} ${this.itemSelector}`;

        cy.get('body').then(($body) => {
            if ($body.find(itemSelector).length > 0) {
                cy.get(itemSelector).eq(index).click();
            }
        });
    }

    compareAndCheckCatalogItem(selectedCheckbox, filterType) {
        const selectedText = selectedCheckbox.labels[0].innerText.trim();
        const expectedText = filterType === 'brand' ? brandMap[selectedText] :
            filterType === 'storage' ? storageMap[selectedText] :
                ramMap[selectedText];
        cy.log(`Selected Text: ${selectedText}`);
        cy.log(`Expected Text: ${expectedText}`);
        checkCatalogItemText(expectedText, this.catalogItemLink);
    }

    selectRandomCheckboxFromFilter1() {
        cy.get(this.filter1).then($checkboxes => {
            const visibleCheckboxes = $checkboxes.filter(':visible');
            const freeCheckboxes = visibleCheckboxes.filter((index, checkbox) => !checkbox.checked && !checkbox.disabled);

            if (freeCheckboxes.length > 0) {
                const randomIndex = Math.floor(Math.random() * freeCheckboxes.length);
                const selectedCheckbox = freeCheckboxes[randomIndex];

                cy.wrap(selectedCheckbox).check({ force: true });

                this.compareAndCheckCatalogItem(selectedCheckbox, 'brand');
            } else {
                cy.log('No free checkboxes available in filter 1');
            }
        });
    }

    selectRandomCheckboxFromFilter2() {
        cy.get(this.filter2).then($checkboxes => {
            const visibleCheckboxes = $checkboxes.filter(':visible');
            const freeCheckboxes = visibleCheckboxes.filter((index, checkbox) => !checkbox.checked && !checkbox.disabled);

            if (freeCheckboxes.length > 0) {
                const randomIndex = Math.floor(Math.random() * freeCheckboxes.length);
                const selectedCheckbox = freeCheckboxes[randomIndex];

                cy.wrap(selectedCheckbox).check({ force: true });

                this.compareAndCheckCatalogItem(selectedCheckbox, 'storage');
            } else {
                cy.log('No free checkboxes available in filter 2');
            }
        });
    }

    selectRandomCheckboxFromFilter3() {
        cy.get(this.filter3).then($checkboxes => {
            const visibleCheckboxes = $checkboxes.filter(':visible');
            const freeCheckboxes = visibleCheckboxes.filter((index, checkbox) => !checkbox.checked && !checkbox.disabled);

            if (freeCheckboxes.length > 0) {
                const randomIndex = Math.floor(Math.random() * freeCheckboxes.length);
                const selectedCheckbox = freeCheckboxes[randomIndex];

                cy.wrap(selectedCheckbox).check({ force: true });

                this.compareAndCheckCatalogItem(selectedCheckbox, 'ram');
            } else {
                cy.log('No free checkboxes available in filter 3');
            }
        });
    }
}

const checkCatalogItemText = (expectedText, catalogItemLink) => {
    if (expectedText) {
        cy.get(catalogItemLink.container).should('contain.text', expectedText);
    }
};

module.exports = new Catalog();
