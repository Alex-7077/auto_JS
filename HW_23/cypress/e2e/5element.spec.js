const MainMenu = require('../../page_object/components/mainMenu');
const Catalog = require('../../page_object/components/catalog');
const HitSalesMenu = require('../../page_object/components/hitSalesMenu');
const PopularCarousel = require('../../page_object/components/popularCarousel');
const SeasonalGoods = require('../../page_object/components/seasonalGoods');
const Services = require('../../page_object/components/services');
const Footer = require('../../page_object/components/footer');
const MainPage = require('../../page_object/mainPage');
const CookiePopup = require('../../page_object/components/cookie');
const Cart = require('../../page_object/components/cart')
const Waiter =require('../../helpers/waiter')
const PreWaiter =require('../../helpers/preWaiter')
const BonusCard =require('../../page_object/components/bonusCard')



describe('E2E site check The Fifth Element site', () => {
    it('should check out the main elements on the home page', () => {
        cy.visit('https://5element.by/');
        Catalog.catalogButton.should('be.visible');
        Footer.socialLinks.should('be.visible');
        HitSalesMenu.secondNavItem.should('be.visible');
        MainMenu.carouselSliderElement.should('be.visible');
        PopularCarousel.carouselCategoriesElement.should('be.visible');
        SeasonalGoods.navBarCarouselElement.should('be.visible');
        Services.navBarCarouselElement.should('be.visible');
        MainPage.heroSlider.should('be.visible');
    });

    it('should accept cookies', () => {
        cy.visit('https://5element.by/');
        CookiePopup.waitAndClose();
    });
    it('should check ability to add items to cart or remove them from there', () => {

        cy.visit('https://5element.by/');
        Catalog.catalogButton.click();
        Catalog.clickElementByIndex(Catalog.catalogWrap, 1);
        cy.url().should('eq', 'https://5element.by/catalog/9-smartfony-i-gadzhety');
        Catalog.getSmartphonesLink().click();
        Catalog.getAddToCartButton().click();
        Catalog.getGoToCartLink().click();
        Cart.getCartIconWithItemCount().should('contain', '1');
        Cart.clickCartIcon();
        Cart.getInputCounterValue().should('have.value', '1');
        Cart.clickPlusButtonMultipleTimes(8);
        Cart.getCartIconWithItemCount().should('contain', '9');
        Cart.getInputCounterValue().should('have.value', '9');
        Cart.clickMinusButtonMultipleTimes(7);
        Cart.getCartIconWithItemCount().should('contain', '2');
        Cart.getInputCounterValue().should('have.value', '2');
        Cart.clickRemoveSelected();
        Cart.getCartIconWithItemCount().should('not.exist');
        Cart.isCartMainSectionNotExist();
    });
    it('should check randomly test product filters', () => {
        cy.visit('https://5element.by/');
        MainMenu.clickSmartphonesLink();


        PreWaiter.interceptAndWaitForRequests();
        Catalog.selectRandomCheckboxFromFilter1();
        PreWaiter.waitForRequestsToComplete();
        Waiter.waitForCatalogUpdate();

        PreWaiter.interceptAndWaitForRequests();
        Catalog.selectRandomCheckboxFromFilter2();
        PreWaiter.waitForRequestsToComplete();
        Waiter.waitForCatalogUpdate();

        Catalog.selectRandomCheckboxFromFilter3();

    });
    it('should check ability to compare products with each other', () => {

        cy.visit('https://5element.by/');
        Catalog.catalogButton.click();
        Catalog.clickElementByIndex(Catalog.catalogWrap, 1);
        cy.url().should('eq', 'https://5element.by/catalog/9-smartfony-i-gadzhety');
        Catalog.getSmartphonesLink().click();
        Catalog.selectRandomCheckboxFromFilter1();
        Catalog.clickElement(Catalog.compareButtonSelector);
        Catalog.selectRandomCheckboxFromFilter2();
        Catalog.clickElement(Catalog.compareButtonSelector);
        Catalog.activeCompareButtonSelector;
        Catalog.goToCompareLinkSelector;
        Catalog.productCardSelector.should('exist');
    });
});

