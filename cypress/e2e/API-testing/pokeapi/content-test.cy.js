describe('Validate with content', () => {

    it('Successfully validate with content', () => {
        cy.request('GET', 'https://pokeapi.co/api/v2/ability').then((response) => {
            expect(response.status).eq(200)
            expect(response.body.results[6]).to.have.property('name', 'limber')
        })
    });

})