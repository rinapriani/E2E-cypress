/// <reference types="Cypress" />
const dataJson = require('../../fixtures/ApiCreateUser')

describe('post user request', () => {
    let accessToken = 'a7c416201118b0c5b4c98d90965face33ffae6c709ee0388f8d54213caa14963'
    let randomText = ""
    let testEmail = ""
    it('create user test', () => {
        var pattern = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        for (var i = 0; i < 10; i++)
        randomText+=pattern.charAt(Math.floor(Math.random() * pattern.length));
        testEmail = randomText + '@gmail.com'

        cy.fixture('ApiCreateUser').then((payload) =>{
            
            //1. create user (POST)
            cy.request({
                method: 'POST',
                url: 'https://gorest.co.in/public/v1/users',
                headers: {
                    'Authorization': 'Bearer ' + accessToken
                },
                body: {
                    "name": payload.name,
                    "gender": payload.gender,
                    "email": testEmail,
                    "status":payload.status
                }
   
            }).then((res)=>{
                cy.log(JSON.stringify(res))
                expect(res.status).to.eq(201)
                expect(res.body.data).has.property('email', testEmail)
                expect(res.body.data).has.property('name',payload.name)
                expect(res.body.data).has.property('status',payload.status)
                expect(res.body.data).has.property('gender',payload.gender)
            }).then((res) =>{
                   const userId = res.body.data.id 
                    cy.log("user id is: " + userId)
                    //2. get user (GET)
                    cy.request({
                        method: 'GET',
                        url: 'https://gorest.co.in/public/v1/users/'+userId,
                        headers: {
                            'Authorization': 'Bearer ' + accessToken
                        }
                    }).then((res)=>{
                        expect(res.status).to.eq(200)
                        expect(res.body.data).has.property('id', userId)
                        expect(res.body.data).has.property('name',payload.name)
                        expect(res.body.data).has.property('status',payload.status)
                        expect(res.body.data).has.property('email', testEmail)
                    })
            })
        })
    })
})