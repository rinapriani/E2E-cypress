/// <reference types ="cypress" />

describe('Searchbox Test', function() {
    before(() =>{
        cy.visit('http://zero.webappsecurity.com/')
    });

    //define steps
    it.only('Should type into searchbox and submit', () => {
        //TODO
        cy.get('#searchTerm').type('zero {enter}')
    });

    it.only('Should click zero login page', () => {
        cy.get('a').contains('Zero - Log in').click()
        cy.url().should('include', '/login.html')
    });

    it.only('should enter a username and password', () => {
        cy.get('#user_login').type('username')
        cy.get('#user_password').type('password')
        cy.get('[type ="submit"]').click()
    });
});
