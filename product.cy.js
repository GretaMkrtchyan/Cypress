describe('Product selecting', () => {
    it('Adding to cart', () => {
       cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
       cy.url().should('eq', 'https://rahulshettyacademy.com/seleniumPractise/#/')
       cy.get('div > div:nth-child(1) > div.stepper-input > a.increment').click()
        .should('have.attr', 'href', '#');
       cy.get('div > div:nth-child(1) > div.product-action > button').click()
        .should('be.enabled');
       cy.get('img[src="https://rahulshettyacademy.com/seleniumPractise/images/bag.png"]').click()
        .should('be.visible','active');
       cy.contains('PROCEED TO CHECKOUT').click()
       .should('be.visible','active');
       cy.get('p[class="quantity"]').should('contain', 2);
       cy.get('p[class="amount"]').should('contain', 240);
       cy.contains('Place Order').click()
       cy.get('select').select('Armenia')
       .should('have.value','Armenia');
       cy.get('input[type="checkbox"]').check()
       .should('be.checked');
       cy.contains('Proceed').click()
    });
})