const dataJson = require('../../fixtures/ApiCreateUser')
const token = 'a7c416201118b0c5b4c98d90965face33ffae6c709ee0388f8d54213caa14963'

describe('Post user', () =>{
    //const accessToken ='a7c416201118b0c5b4c98d90965face33ffae6c709ee0388f8d54213caa14963'
    it('should create user', () => {
        cy.createUser()
    });
    
})

