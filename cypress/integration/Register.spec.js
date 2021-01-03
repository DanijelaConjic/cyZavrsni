/// <reference types = "Cypress" />
const Locators = require('../fixtures/Locators.json');



describe('Poboljsani testovi', () => {
    let correctFirstName = "Danijela"
    let correctLastName = "Conjic"
    let correctPassword = "d1234567"
    let correctPasswordConfirmation = "d1234567"
    let correctEmail = "dddd11@dd.com"
    let invalidEmail = "dddd11dd.com"
    let invalidPassword = "d123456"
    it("Posetiti stranicu", () => {
        cy.visit("/")
    })


    it('click on register', () => {
    cy.visit("/")
    cy.get(".nav-link").eq(1).click()
    })

    it('register with valid credentials', () => {
        cy.visit('/')
        cy.get(Locators.Header.Register).click()
        cy.get(Locators.Register.FirstName).type(correctFirstName)
        cy.get(Locators.Register.LastName).type(correctLastName)
        cy.get(Locators.Register.Password).type(correctPassword)
        cy.get(Locators.Register.ConfirmedPassword).type(correctPasswordConfirmation)
        cy.get(Locators.Register.Email).type(correctEmail)
        cy.get(Locators.Register.Checkbox).check()
        cy.get(Locators.Register.Submit).click()
        cy.url().should("contains", "/register")
        
    })

    it('registration with invalid email', () => {
        cy.visit("/")
        cy.get(Locators.Header.Register).click()
        cy.get(Locators.Register.FirstName).type(correctFirstName)
        cy.get(Locators.Register.LastName).type(correctLastName)
        cy.get(Locators.Register.Password).type(correctPassword)
        cy.get(Locators.Register.ConfirmedPassword).type(correctPasswordConfirmation)
        cy.get(Locators.Register.Email).type(invalidEmail)
        cy.get(Locators.Register.Checkbox).check()
        cy.get(Locators.Register.Submit).click()
        cy.url().should("contains", "/register")
        
    })
        


    it('registration with invalid password', () => {
        cy.visit('/')
        cy.get(Locators.Header.Register).click()
        cy.get(Locators.Register.FirstName).type(correctFirstName)
        cy.get(Locators.Register.LastName).type(correctLastName)
        cy.get(Locators.Register.Password).type(invalidPassword)
        cy.get(Locators.Register.ConfirmedPassword).type(correctPasswordConfirmation)
        cy.get(Locators.Register.Email).type(correctEmail)
        cy.get(Locators.Register.Checkbox).check()
        cy.get(Locators.Register.Submit).click()
        cy.url().should("contains", "/register")
        
    })
       
    it('registration with empty field of email', () => {
        cy.visit('/')
        cy.get(Locators.Header.Register).click()
        cy.get(Locators.Register.FirstName).type(correctFirstName)
        cy.get(Locators.Register.LastName).type(correctLastName)
        cy.get(Locators.Register.Password).type(correctPassword)
        cy.get(Locators.Register.ConfirmedPassword).type(correctPasswordConfirmation)
        cy.get(Locators.Register.Checkbox).check()
        cy.get(Locators.Register.Submit).click()
        cy.get(Locators.Register.Email).then(($input) => {
            expect($input[0].validationMessage).to.eq('Please fill out this field.')
        cy.url().should("contains", "/register")
          })

        
       
    })
    
    it('registration with empty field of password', () => {
        cy.visit('/')
        cy.get(Locators.Header.Register).click()
        cy.get(Locators.Register.FirstName).type(correctFirstName)
        cy.get(Locators.Register.LastName).type(correctLastName)
        cy.get(Locators.Register.ConfirmedPassword).type(correctPasswordConfirmation)
        cy.get(Locators.Register.Email).type(correctEmail)
        cy.get(Locators.Register.Checkbox).check()
        cy.get(Locators.Register.Submit).click()
        cy.get(Locators.Register.Password).then(($input) => {
            expect($input[0].validationMessage).to.eq('Please fill out this field.')
        cy.url().should("contains", "/register")
          })
        
    })
    
    it('the checkbox is not marked', () => {
        cy.visit('/')
        cy.get(Locators.Header.Register).click()
        cy.get(Locators.Register.FirstName).type(correctFirstName)
        cy.get(Locators.Register.LastName).type(correctLastName)
        cy.get(Locators.Register.Password).type(correctPassword)
        cy.get(Locators.Register.ConfirmedPassword).type(correctPasswordConfirmation)
        cy.get(Locators.Register.Email).type(correctEmail)
        cy.get(Locators.Register.Submit).click()
        cy.url().should("contains", "/register")
        
    })
})    