/// <reference types = "Cypress" />
const Locators = require('../fixtures/Locators.json');
 describe('Create gradebook', () => {
    let correctEmail = "dddd11@dd.com"
    let correctPassword = "d1234567"
    let correctTitle = "Cypresss gradebook"
    it('Click on login' , () => {
      cy.visit('/')
      cy.get(".nav-link").eq(0).click()
    })
    it('Login with valid credentials', () => {
        cy.visit("/")
        cy.get("a[href='/login']").click()
        cy.get(Locators.Header.SignIn).click()
        cy.get(Locators.SignIn.Email).type(correctEmail)
        cy.get(Locators.SignIn.Password).type(correctPassword)
        cy.get(Locators.SignIn.Submit).click()
    })
    it('create new gradebook', () => {
        cy.get(Locators.Header.CreateGradebook).click()
        cy.get(Locators.CreateGradebook.Title).type(correctTitle)
        //cy.get(Locators.CreateGradebook.Professor).select(correctProfessor)
        cy.get('select').select('Danijela1717 Conjic1717')
        cy.get(Locators.CreateGradebook.Submit).click()
    })
 })