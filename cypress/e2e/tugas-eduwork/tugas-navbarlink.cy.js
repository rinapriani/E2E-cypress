/// <reference types = "cypress" />

describe('Navbar Test', () => {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
    })

    it('Should display online banking content ', () => {
        //TODO
        cy.get('#onlineBankingMenu').click()
        cy.url().should('include', 'online-banking.html')
        cy.get('h1').should('have.text', 'Online Banking')
    });

    it('Should display feedback content', () => {
        //TODO
        cy.get('#feedback').click()
        cy.url().should('include', 'feedback.html')
    });

    it('Should display homepage content', () => {
        cy.go('back')
        cy.get('#homeMenu').click()
        cy.get('a').should('have.class', 'brand').and('have.attr', 'href').and('include', 'index.html')
    });
})