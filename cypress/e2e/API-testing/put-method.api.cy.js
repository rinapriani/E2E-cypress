describe('Update data', () => {

    it('Successfully update data', () => {
        var user ={
            "name" : "Rina Apriani",
            "job" : "Quality Assurance"
        }
        cy.request('PUT', 'https://reqres.in/api/users/2', user).then((Response) => {
            expect(Response.status).equal(200)
            expect(Response.body.name).to.eq(user.name)
        })
    });
})