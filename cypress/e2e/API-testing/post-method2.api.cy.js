describe('Given the Users api', () => {
      it.only('Then it should create a new user', () => {
        cy.request({
          method: 'POST',
          url: 'https://reqres.in/api/users',
          body: {
            name: "Rina Apriani",
            job: "Quality Assurance",
          }
        })
          .should((response) => {
            expect(response.status).eq(201)
            expect(response.body.name).eq("Rina Apriani")
          });
    });
});