Cypress.Commands.add('loginwithinvalidusername', (username,password) => {
    cy.get('#user-name').clear()
    cy.get('#user-name').type(username[1])
    cy.get('#password').clear()
    cy.get('#password').type(password[0])
    cy.get('#login-button').click()
})

Cypress.Commands.add('loginwithinvalidpassword', (username,password) => {
    cy.get('#user-name').clear()
    cy.get('#user-name').type(username[0])
    cy.get('#password').clear()
    cy.get('#password').type(password[1])
    cy.get('#login-button').click()
})

Cypress.Commands.add('loginwithleaveusernameinfield', (username,password) => {
    cy.get('#user-name').clear()
    cy.get('#user-name').focus().blur()
    cy.get('#password').clear()
    cy.get('#password').type(password[0])
    cy.get('#login-button').click()
})

Cypress.Commands.add('loginwithleavepasswordinfield', (username,password) => {
    cy.get('#user-name').clear()
    cy.get('#user-name').type(username[0])
    cy.get('#password').clear()
    cy.get('#password').focus().blur()
    cy.get('#login-button').click()
})

Cypress.Commands.add('loginwithuppercaseusername', (username,password) => {
    cy.get('#user-name').clear()
    cy.get('#user-name').type(username[2])
    cy.get('#password').clear()
    cy.get('#password').type(password[0])
    cy.get('#login-button').click()
})

Cypress.Commands.add('loginwithuppercasepassword', (username,password) => {
    cy.get('#user-name').clear()
    cy.get('#user-name').type(username[0])
    cy.get('#password').clear()
    cy.get('#password').type(password[2])
    cy.get('#login-button').click()
})

Cypress.Commands.add('loginwithvaliddata', (username,password) => {
    cy.get('#user-name').clear()
    cy.get('#user-name').type(username[0])
    cy.get('#password').clear()
    cy.get('#password').type(password[0])
    cy.get('#login-button').click()
})