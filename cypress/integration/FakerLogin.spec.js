/// <reference types="Cypress" />
const Locators = require('../fixtures/Locators.json');
const faker = require('faker');
let userData = {
    randomName: faker.name.findName(),
    randomEmail: faker.internet.email(),
    randomPassword: faker.random.number(),
    randomNewPassword: faker.internet.password(),
    randomLastname: faker.name.lastName(),
}
describe('Poboljsani testovi', () => {
    let correctEmail = "dddd11@dd.com"
    let correctPassword = "d1234567"
    beforeEach("visit link",()=>{
        cy.visit("/")
        cy.url().should("contains", "https://gradebook")
    })
    it('Login with valid credentials', () =>{
        cy.get(Locators.Header.SignIn).click()
        cy.get(Locators.SignIn.Email).type(correctEmail) 
        cy.get(Locators.SignIn.Password).type(correctPassword)  
        cy.get(Locators.SignIn.Submit).click() 
    })
    it('Logout', () =>{
        cy.get(Locators.Header.SignIn).click()
        cy.get(Locators.SignIn.Email).type(correctEmail) 
        cy.get(Locators.SignIn.Password).type(correctPassword)  
        cy.get(Locators.SignIn.Submit).click() 
        cy.get(Locators.Header.SignOut).should('be.visible').click()
    })
    it('Register', () =>{
        cy.get(Locators.Header.Register).click()
    })
    it('faker invalid credentials', () => {
        cy.get(Locators.Header.SignIn).click()
        cy.get(Locators.SignIn.Email).type(userData.randomEmail) 
        cy.get(Locators.SignIn.Password).type(userData.randomPassword)  
        cy.get(Locators.SignIn.Submit).click() 
    })
    it('faker register', () => {
        cy.get(Locators.Header.Register).click()
        cy.get(Locators.Register.FirstName).type(userData.randomName)
        cy.get(Locators.Register.LastName).type(userData.randomLastname)
        cy.get(Locators.Register.Password).type(userData.randomNewPassword +'12')
        cy.get(Locators.Register.ConfirmedPassword).type(userData.randomNewPassword +'12')
        cy.get(Locators.Register.Email).type(userData.randomEmail)
        cy.get(Locators.Register.Checkbox).check()
        cy.get(Locators.Register.Submit).click()
    })
})