describe('Delet User', () => {
    
    it('Then it should delete a user', () => {
        cy.request({
            method : 'DELETE',
            url : 'https://reqres.in/api/users/2',
        })
        .should((Response) => {
            expect(Response.status).eq(204)
            expect(Response.body).to.have.length(0)
        })
    });
})