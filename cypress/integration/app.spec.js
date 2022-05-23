/// <reference types="cypress" />

describe("General app tests", () => {
    it("Visits the app root url", () => {
      cy.visit("http://localhost:3000/")
      cy.contains("h1", "Lorem ipsum")
    })
    it("Button pressed", () => {
        cy.get('button').click();
        cy.contains('h1', 'List of github users');
    })
    it("Check if the list is being created", () => {
        cy.get('.card-group').children('div')
  })
  })
  