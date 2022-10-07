const token = 'a7c416201118b0c5b4c98d90965face33ffae6c709ee0388f8d54213caa14963'

Cypress.Commands.add('createUser', () => {
  cy.fixture("ApiCreateUser").then((create) => {
    
    cy.request({
        method : 'POST',
        url : 'https://gorest.co.in/public/v1/users',
        headers:{
            'Authorization': 'Bearer ' + token
        },
        body:{
            "name" : create.name,
            "gender" : create.gender,
             "email" : create.email,
            "status" : create.status
        }
    }).then((Response) => {
        expect (Response.status).eq(201)
        expect(Response.body.data).to.have.property('name', create.name)
        expect(Response.body.data).to.have.property('gender',create.gender)
        expect(Response.body.data).to.have.property('email',create.email)
        expect(Response.body.data).to.have.property('status',create.status)
    })
})
});