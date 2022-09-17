/// <reference types = "cypress" />

describe('Navbar Test', () => {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
    })

    it('Should display online banking content ', () => {
        //TODO
        cy.get('#onlineBankingMenu').click()
        cy.url().should('include', 'online-banking.html')
        cy.get('h1').should('be.visible')
    });

    it('Should display feedback content', () => {
        //TODO
        cy.get('#feedback').click()
        cy.url().should('include', 'feedback.html')
    });

    it('Should display homepage content', () => {
        //TODO
        cy.contains('Zero Bank').click()
        cy.url().should('include', 'index.html')
    });
})