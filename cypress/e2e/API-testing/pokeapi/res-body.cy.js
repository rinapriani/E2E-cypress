describe('Validate Response Body', () => {
    it('Successfully with response body', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
        cy.get('@pokemon')
            .should((response) => {
                expect(response).property('status').to.equal(200)
                expect(response.body).property('name').to.not.be.oneOf([null, ""])
            })
    });
})