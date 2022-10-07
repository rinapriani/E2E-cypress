describe ('Basic Auth', function() {
    it('successfully login bu appending username and password in URL ', () => {
        cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')
        cy.get('p').should('include.text', 'Congratulations! You must have the proper credentials.')
    });

    it('Successfully login using headers', () => {
        cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth', {
            Headers: {
                Authorization: 'Basic YWRtaW46YWRtaW4=',
            },
            StatusCode: 200
        })
        cy.get('p').should('include.text', 'Congratulations! You must have the proper credentials.')
    });
})