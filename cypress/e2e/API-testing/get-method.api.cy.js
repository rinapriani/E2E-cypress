describe('GET user list', () => {

    it('Verify the list users will displayed', () => {
        cy.request({
            method : 'GET',
            url : 'https://reqres.in/api/users/'
        }).as('users')
        //add assertions status should equal 200
        cy.get('@users').its('status').should('equal', 200)
    });
});