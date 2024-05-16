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
    it('should check the ability to add an item to the cart', () => {
        cy.visit('https://5element.by/');
        Catalog.catalogButton.click();
        Catalog.ClickElementByIndex(Catalog.catalogWrap, 1);
        cy.url().should('eq', 'https://5element.by/catalog/9-smartfony-i-gadzhety');
        Catalog.getSmartphonesLink().click();
        Catalog.getAddToCartButton().click();
        Catalog.getGoToCartLink().click();
        Cart.getCartIconWithItemCount().should('contain', '1');
    });
});