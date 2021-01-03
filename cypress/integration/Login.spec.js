/// <reference types = "Cypress" />
const Locators = require('../fixtures/Locators.json');



describe('Poboljsani testovi', () => {
    let correctEmail = "dddd11@dd.com"
    let correctPassword = "d1234567"
    
 
    it("Posetiti stranicu", () => {
        cy.visit("/")
    })
    it("kliknuti na Sign in", () => {
        cy.visit("/")
        cy.get(".nav-link").eq(0).click()
    })
    it("Sign in with valid credentials", () => {
        cy.visit("/")
        cy.get(Locators.Header.SignIn).click()
        cy.get(Locators.SignIn.Email).type(correctEmail)
        cy.get(Locators.SignIn.Password).type(correctPassword)
        cy.get(Locators.SignIn.Submit).click()
        
    })  


    it("Sign in  with empty field of email", () => {
        cy.visit("/")
        cy.get(Locators.Header.SignIn).click()
        cy.get(Locators.SignIn.Password).type('d1234567')
        cy.get(Locators.SignIn.Submit).click()
        cy.get(Locators.SignIn.Email).then(($input) => {
            expect($input[0].validationMessage).to.eq('Please fill out this field.') 
        cy.url().should("contains", "/login")
        })
    
    })

    
    it("login with empty field of password", () => {
        cy.visit("/")
        cy.get(Locators.Header.SignIn).click()
        cy.get(Locators.SignIn.Email).type('dddd11@dd.com')
        cy.get(Locators.SignIn.Password).then(($input) => {
            expect($input[0].validationMessage).to.eq('Please fill out this field.')
        cy.url().should("contains", "/login")
        })
        cy.get(Locators.SignIn.Submit).click() 
    })

    it("login with all empty fields", () => {
        cy.visit("/")
        cy.get(Locators.Header.SignIn).click()
        cy.get(Locators.SignIn.Submit).click() 
        cy.get(Locators.SignIn.Email).then(($input) => {
            expect($input[0].validationMessage).to.eq('Please fill out this field.') 
        cy.url().should("contains", "/login")
        })
        
    })  

    it("Logout", () => {
        cy.visit("/")
        cy.get(Locators.Header.SignIn).click()
        cy.get(Locators.SignIn.Email).type('dddd11@dd.com')
        cy.get(Locators.SignIn.Password).type('d1234567')
        cy.get(Locators.SignIn.Submit).click()
        cy.get(Locators.Header.SignOut).click()
    })
})