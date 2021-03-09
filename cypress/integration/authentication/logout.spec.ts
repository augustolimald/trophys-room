/// <reference types="cypress" />

context('Login Page', () => {
  beforeEach(() => {
    cy['login']('admin@mail.com', '1234');
    cy.visit('/games/search');
  });

  it('Should logout correctly', () => {
    cy.get('#quitButton')
      .click()
      .should(() => {
        expect(eval('localStorage').getItem('token')).to.be.null;
      });
  });
});
