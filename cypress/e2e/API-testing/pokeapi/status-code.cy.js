describe('Validate with Status Code', () => {
    it('Successfully validate with status code', () =>{
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
        cy.get('@pokemon').its('status').should('equal', 200)
    })

    it('Validate with status code', () => {
        cy.request({
            method : 'GET',
            url : 'https://pokeapi.co/api/v2/pokemon/ditto'
        }).as('user')
        cy.get('@user').its('status').should('equal', 200)
    });

    it('Validate with response body', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
        cy.get('@pokemon').its('body').should('include',{name : "ditto"} )
    });
})