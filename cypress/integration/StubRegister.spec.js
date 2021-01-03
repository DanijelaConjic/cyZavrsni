/// <reference types = "Cypress" />
const Locators = require('../fixtures/Locators.json');

describe('registracija stub', () =>{

    it.only('stub registracije', () => {
        cy.visit('/')
        cy.get(Locators.Header.Register).click()
        cy.get(Locators.Register.FirstName).type('Danijela')//ne treba header jer smo na toj stranici
        cy.get(Locators.Register.LastName).type('Conjic')
        cy.get(Locators.Register.Email).type('dddd11@dd.com')
        cy.get(Locators.Register.Password).type('d1234567')
        cy.get(Locators.Register.ConfirmedPassword).type('d1234567')
        cy.get(Locators.Register.Checkbox).check()
        cy.get(Locators.Register.Submit).click()
        cy.intercept('POST', 'https://gradebook.vivifyideas.com/register',
            {fixture : 'stubUser.json'}
        )
    
    })
})
