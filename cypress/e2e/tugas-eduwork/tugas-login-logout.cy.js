/// <reference types = "cypress" />

describe('Login/Logout Test', () => {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url().should('include', '/index.html')
        cy.get('#signin_button').click()
    })

    //negative screnario
    it.only('Should try login with invalid data', () => {
        //TODO

        cy.get('#user_login').type('invalid username')
        cy.get('#user_password').type('invalid password')
        cy.get('input[name ="submit"]').click()
    });
    
    it.only('Should display error message', () => {
        //TODO
        cy.get('.alert-error').should('be.visible').and('contain.text', 'Login and/or password are wrong.')
    });

    //positive test
    it.only('Should try to login', () => {
        cy.fixture("login-webzero").then(user => {
            const username =user.username
            const password = user.password

            //penambahan command.js
            cy.login(username,password)

            cy.url().should('include', '/bank/account-summary.html')

            cy.get('#pay_bills_tab').click()

        });
    });


    it.only('Should logout from the application', () => {
        //TODO
        cy.contains('username').click()
        cy.get('#logout_link').click()
        cy.get('strong').should('contain.text', 'Home')
    });
})