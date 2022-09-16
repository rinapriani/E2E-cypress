/// <reference types ="cypress" />

describe('Searchbox Test', function() {
    before(() =>{
        cy.visit('http://zero.webappsecurity.com/')
    });

    //define steps
    it.only('Should type into searchbox and submit', () => {
        //TODO
        cy.get('#searchTerm').type('some text {enter}')
    });

    it('Should show search result page', () => {
        //TODO
        cy.get('h2').contains('Search Result:')
    });
});
