/// <reference types = "cypress" />

describe('Checkout Product in saucedemo website', () => {
    before(() => {
        cy.visit('https://www.saucedemo.com/')
        cy.fixture("login-saucedemo").then(user => {
            const username = user.username
            const password = user.password

            // add commands-login-saucedemo.js
            cy.loginwithvaliddata(username,password)
            
            cy.url().should('include', '/inventory.html')
        })
    })


    it('Should leave first name in field at checkout product', () => {
        cy.get('#item_4_title_link').click()
        cy.get('#add-to-cart-sauce-labs-backpack').click()
        cy.get('#shopping_cart_container').click()
        cy.url().should('include', '/cart.html')

        //checkout product
        cy.get('#checkout').click()
        cy.get('#first-name').focus().blur()
        cy.get('#last-name').type('Apriani')
        cy.get('#postal-code').type('41161')
        cy.get('#continue').click()
        cy.get('[data-test = "error"]').should('have.text', 'Error: First Name is required')
    });

    it('Should leave last name in field at checkout product', () => {
        cy.get('#first-name').type('Rina')
        cy.get('#last-name').clear()
        cy.get('#continue').click()
        cy.get('[data-test = "error"]').should('have.text', 'Error: Last Name is required')
    });

    it('Should leave postal code in field at checkout product', () => {
        cy.get('#last-name').type('Apriani')
        cy.get('#postal-code').clear()
        cy.get('#continue').click()
        cy.get('[data-test = "error"]').should('have.text', 'Error: Postal Code is required')
        cy.reload()
    });

    it('Should checkout valid product', () => {
        cy.fixture("login-saucedemo").then(user => {
            const username = user.username
            const password = user.password

            // add commands-login-saucedemo.js
            cy.loginwithvaliddata(username,password)
            
            cy.url().should('include', '/inventory.html')
        })
        cy.get('#item_4_title_link').click()
        cy.get('#add-to-cart-sauce-labs-backpack').click()
        cy.get('#shopping_cart_container').click()
        cy.url().should('include', '/cart.html')

        //checkout product
        cy.fixture("saucedemo").then(data => {
            const firstName = data.firstName
            const lastName = data.lastName
            const postalCode = data.postalCode

            cy.get('#checkout').click()
            cy.get('#first-name').type(firstName)
            cy.get('#last-name').type(lastName)
            cy.get('#postal-code').type(postalCode)
            cy.get('#continue').click()
            cy.contains('Checkout: Overview').should('have.class', 'title')
            cy.get('#finish').click()
            cy.url().should('include', '/checkout-complete.html')
            cy.get('#back-to-products').click()
        })
        
    });
})