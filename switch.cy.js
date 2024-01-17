describe('Product selecting', () => {
    it('To add a product to cart', () => {
        cy.visit('https://switchresearch.org/'),
        cy.url().should('eq', 'https://switchresearch.org/'),
        cy.contains('Explore Journals').click()
        .should('be.visible','active');
        cy.get('button[type="submit"][class="recommendation-modal__button"]').click()
        .should('be.enabled');
        cy.get('div.card__information > h3 > a[href="/products/the-emotions-journal"]').click({force: true})
        .should('not.be.visible');
        cy.get('button[data-rid="32a3bb5d-64d5-4c02-87d0-934e16412479"]').click()
        .should('be.enabled');
        cy.get('img[src="//switchresearch.org/cdn/shop/t/74/assets/switch-cart.svg?v=43434579715876641301704698349"]')
        .click().should('be.visible')
}) 
});
 
describe('Filter functionality', () => {
    it('To check filter functionality', () => {
        cy.visit('https://switchresearch.org/collections/hardcover-journals'),
        cy.url().should('eq', 'https://switchresearch.org/collections/hardcover-journals'),
        cy.get('button[type="submit"][class="recommendation-modal__button"]')
        .should('be.enabled').click();
        cy.get('select#SortBy').select('Price, high to low')
        .should('have.value', 'price-descending')
    })
}); 

