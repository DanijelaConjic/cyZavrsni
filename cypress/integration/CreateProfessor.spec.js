/// <reference types = "Cypress" />
const Locators = require('../fixtures/Locators.json');


describe('Create professor', () => {
    let correctEmail = "dddd11@dd.com"
    let correctPassword = "d1234567"
    let correctFirstName = "Danijela1717"
    let correctLastName = "Conjic1717"
    let correctImageUrl = "https://www.zenasamja.me/images/0100/monalisa-v.jpg"
    
    
  it("kliknuti na Login", () => {
    cy.visit("/")
    cy.get(".nav-link").eq(0).click()
})

  

it('Login with valid credentials', () => {
    cy.visit("/")
    cy.get(Locators.Header.SignIn).click()
    cy.get(Locators.SignIn.Email).type(correctEmail) 
    cy.get(Locators.SignIn.Password).type(correctPassword)  
    cy.get(Locators.SignIn.Submit).click() 
})

it('create new proffesor',()=>{
    cy.get("a[href='/gradebooks#']").click()
    cy.get("a[href='/create-professor']").click()
    cy.get('#firstName').type("Ivana321")
    cy.get('#lastName').type("Ivanovic321")
    cy.get('.btn.btn-sm.btn-primary').click()
    cy.get("input[name='image_NaN']").type('https://www.zenasamja.me/images/0100/monalisa-v.jpg')
    cy.get("button[name='submit']").click();
  })

// it('create new proffesor',()=>{
//     cy.get(Locators.Header.Professors).click()
//     cy.get(Locators.Professors.CreateProfessor).click()
//     cy.get(Locators.CreateProfessor.FirstName).type(correctFirstName)
//     cy.get(Locators.CreateProfessor.LastName).type(correctLastName)
//     cy.get(Locators.CreateProfessor.AddImages).click()
//     cy.get(Locators.CreateProfessor.ImageUrl).type(correctImageUrl)
//     cy.get(Locators.CreateProfessor.Submit).click();
//   })
   
})