/// <reference types="cypress" />

import faker from 'faker';

context('User Registration Page', () => {
  beforeEach(() => {
    cy.visit('/users/new');
  });

  it('An user should be able to register', () => {
    const data = {
      name: faker.name.findName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    };

    cy.get('#inputName').type(data.name).should('have.value', data.name);
    cy.get('#inputEmail').type(data.email).should('have.value', data.email);
    cy.get('#inputPassword').type(data.password).should('have.value', data.password);

    eval(`cy.get('#inputFile').attachFile('images/avatar.jpg')`);
    cy.get('#registerButton').click({ timeout: 100000 });
    cy.wait(12000);

    cy.url().should('not.contain', '/users');
    cy.get('#inputEmail').type(data.email);
    cy.get('#inputPassword').type(data.password);
    cy.get('#loginButton').click();

    cy.url().should('contain', '/games');
    cy.get('#userName').contains(data.name);
  });
});
