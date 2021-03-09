/// <reference types="cypress" />

context('Login Page', () => {
  const data = {
    name: 'Administrador',
    email: 'admin@mail.com',
    password: '1234',
  };

  beforeEach(() => {
    cy.visit('/');
  });

  it('Should login with admin data', () => {
    cy.get('#inputEmail').type(data.email).should('have.value', data.email);
    cy.get('#inputPassword').type(data.password).should('have.value', data.password);
    cy.get('#loginButton').click();

    cy.url().should('include', '/games');
    cy.get('#userName').contains(data.name);
  });

  it('Should not login with wrong admin data', () => {
    cy.get('#inputEmail').type(data.email).should('have.value', data.email);
    cy.get('#inputPassword')
      .type(data.password.repeat(2))
      .should('have.value', data.password.repeat(2));

    cy.get('#loginButton').click();

    cy.on('window:alert', txt => expect(txt).to.contains('erro'));
    cy.url().should('eq', `${Cypress.config().baseUrl}/`);
  });

  it('Should redirect to user registration page', () => {
    cy.get('#registrationPageURL').click();
    cy.url().should('contain', '/users/new');
  });
});
