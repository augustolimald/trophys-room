/// <reference types="cypress" />

import faker from 'faker';

context('User Profile Page', () => {
  beforeEach(() => {
    cy['createAuthenticatedUser']();
    cy.visit('/users/update');
  });

  afterEach(() => {
    cy['logout']();
  });

  it('An user should be able to update his data', () => {
    const data = {
      name: faker.name.findName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    };

    // PROFILE PAGE
    cy.get('#inputName').clear().type(data.name);
    cy.get('#inputEmail').clear().type(data.email);
    cy.get('#inputPassword').type(data.password);
    cy.get('#updateButton').click();

    cy.url().should('not.contain', 'user');

    // LOGIN PAGE
    cy.get('#inputEmail').type(data.email);
    cy.get('#inputPassword').type(data.password);
    cy.get('#loginButton').click({ timeout: 5000 });

    // GAME PAGE
    cy.url().should('include', '/games');

    // PROFILE PAGE
    cy.visit('/users/update');
    cy.get('#inputName').should('have.value', data.name);
    cy.get('#inputEmail').should('have.value', data.email);
  });

  it('An user should be able to delete his data', () => {
    // PROFILE PAGE
    cy.get('#deleteButton').click();
    // CONFIRMAR

    cy.get('#quitButton')
      .click()
      .should(() => {
        expect(eval('localStorage').getItem('token')).to.be.null;
      });

    // LOGIN PAGE
    cy.get('#inputEmail').type('admin@mail.com');
    cy.get('#inputPassword').type('1234');
    cy.get('#loginButton').click({ timeout: 5000 });

    // GAME PAGE
    cy.url().should('not.contain', '/games');
  });
});
