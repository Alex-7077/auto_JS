const { productId,schema } = require('../../../helpers/constants');
const chai = require('chai');
const chaiJsonSchema = require('chai-json-schema');

chai.use(chaiJsonSchema);

describe('Products API', () => {
    it('should retrieve Xiaomi products and return status 200', () => {
        cy.request('https://5element.by/catalog/377-smartfony/brand=xiaomi')
            .its('status')
            .should('equal', 200);
    });

    it('should retrieve a specific product by ID', () => {

    cy.request(`https://5element.by/products/${productId}`)
        .its('status')
        .should('equal', 200);
});
    it('should retrieve match JSON schema', () => {
        cy.request({
            method: 'GET',
            url: 'https://5element.by/ajax/multipoint.php',
            qs: {
                action: 'getCompareProducts'
            }
        })
            .its('body')
            .then((body) => {
                chai.expect(body).to.be.jsonSchema(schema);
            });
    });
});



