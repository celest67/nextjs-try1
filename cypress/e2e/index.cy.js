/// <reference types="cypress" />

describe('Index', () => {
  it('should load index page', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/')
  })

  it('should increment by one when Add button clicked', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#counter').contains('0')

    cy.get('#buttonAdd').click();
    cy.get('#counter').contains('1')

    cy.get('#buttonAdd').click();
    cy.get('#counter').contains('2')

    cy.get('#buttonAdd').click();
    cy.get('#counter').contains('3')

  });
})