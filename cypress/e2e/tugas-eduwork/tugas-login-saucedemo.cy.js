/// <reference types = "cypress" />

describe('Login Saucedemo Website', () => {
    before(() => {
        cy.visit('https://www.saucedemo.com/')
    })

    it('Should Login with invalid username', () => {
        cy.fixture("login-saucedemo").then(user => {
            const username = user.username
            const password = user.password

            // add commands-login-saucedemo.js
            cy.loginwithinvalidusername(username,password)
            
            cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username and password do not match any user in this service')
            cy.reload()
        })
        
    });

    it('Should Login with invalid password', () => {
        cy.fixture("login-saucedemo").then(user => {
            const username = user.username
            const password = user.password

            // add commands-login-saucedemo.js
            cy.loginwithinvalidpassword(username,password)
    
            cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username and password do not match any user in this service')
            cy.reload()
        })
    });

    it('Should Login with leave username in field', () => {
        cy.fixture("login-saucedemo").then(user => {
            const username = user.username
            const password = user.password

            // add commands-login-saucedemo.js
            cy.loginwithleaveusernameinfield(username,password)
           
            cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username is required')
            cy.reload()
        })
    });

    it('Should Login with leave password in field', () => {
        cy.fixture("login-saucedemo").then(user => {
            const username = user.username
            const password = user.password

            // add commands-login-saucedemo.js
            cy.loginwithleavepasswordinfield(username,password)
           
            cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Password is required')
            cy.reload()
        })
    });

    it('Should Login with uppercase username', () => {
        cy.fixture("login-saucedemo").then(user => {
            const username = user.username
            const password = user.password

            // add commands-login-saucedemo.js
            cy.loginwithuppercaseusername(username,password)
           
            cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username and password do not match any user in this service')
            cy.reload()
        })
    });

    it('Should Login with uppercase password', () => {
        cy.fixture("login-saucedemo").then(user => {
            const username = user.username
            const password = user.password

            // add commands-login-saucedemo.js
            cy.loginwithuppercasepassword(username,password)
            
            cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username and password do not match any user in this service')
            cy.reload()
        })
    });

    it('Should Login with valid data', () => {
        cy.fixture("login-saucedemo").then(user => {
            const username = user.username
            const password = user.password

            // add commands-login-saucedemo.js
            cy.loginwithvaliddata(username,password)
            
            cy.url().should('include', '/inventory.html')
        })
    });
})