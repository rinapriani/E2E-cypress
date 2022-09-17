/// <reference types = "cypress" />

describe('Login/Logout Test', () => {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url().should('include', '/index.html')
        cy.get('#signin_button').click()
    })

    //negative screnario
    it('Should try login with invalid data', () => {
        //TODO

        cy.get('#user_login').type('invalid username')
        cy.get('#user_password').type('invalid password')
        cy.get('input[name ="submit"]').click()
    });
    
    it('Should display error message', () => {
        //TODO
        cy.get('.alert-error').should('be.visible').and('contain.text', 'Login and/or password are wrong.')
    });

    //positive test
    it('Should login to application with valid data', () => {
        //TODO
        cy.fixture("login-webzero").then(user => {
            const username = user.username
            const password = user.password

            cy.get('#user_login').clear()
            cy.get('#user_login').type(username)
            cy.get('#user_password').clear()
            cy.get('#user_password').type(password)
            cy.get('input[name ="submit"]').click()

            cy.get('h2').should('contain.text', 'Cash Account')
        })

    });

    it('Should logout from the application', () => {
        //TODO
        cy.contains('username').click()
        cy.get('#logout_link').click()
        cy.get('strong').should('contain.text', 'Home')
    });
})