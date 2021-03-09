/// <reference types="cypress" />

const user = { email: 'e', password: 1 };

context('Search Game Page', () => {
  beforeEach(() => {
    cy['createAuthenticatedUser']();
    cy.visit('/games/search');

    cy.get('#dropdown-genres-text').click();
    cy.get('#dropdown-genres>a').eq(0).click();

    cy.get('#dropdown-publishers-text').click();
    cy.get('#dropdown-publishers>a').eq(0).click();

    cy.get('#dropdown-relations-text').click();
    cy.get('#dropdown-relations>a').eq(0).click();
  });

  afterEach(() => {
    cy['deleteUser']();
  });

  it('Should list all games', () => {
    cy.get('#games').children().contains('Gênero');
    cy.get('#games').children().contains('Desenvolvedora');
    cy.get('#games').children().contains('Nota');
  });

  it('Should list all games from a genre', () => {
    cy.get('#dropdown-genres-text').click();
    cy.get('#dropdown-genres>a').eq(2).click();
    cy.get('#games').children().contains('Luta');
  });

  it('Should list all games from a publisher', () => {
    cy.get('#dropdown-publishers-text').click();
    cy.get('#dropdown-publishers>a').eq(2).click();
    cy.get('#games').children().contains('Ubisoft');
  });

  it('An user should be able to add and remove some games from his wishlist', () => {
    cy.get('.btnWish').eq(0).click({ force: true });
    cy.get('.btnWish').eq(2).click({ force: true });
    cy.get('.btnWish').eq(5).click({ force: true });

    cy.get('#dropdown-relations-text').click();
    cy.get('#dropdown-relations>a').eq(1).click();
    cy.get('#games').children().should('have.length', 3);
    cy.get('.btnWish').click({ multiple: true, force: true });

    cy.get('#dropdown-relations-text').click();
    cy.get('#dropdown-relations>a').eq(1).click();
    cy.get('#games').children().should('have.length', 0);
  });

  it('An user should be able to add some games from his played list', () => {
    cy.get('.btnPlay').eq(0).click({ force: true });
    cy.get('.btnPlay').eq(2).click({ force: true });
    cy.get('.btnPlay').eq(5).click({ force: true });

    cy.get('#dropdown-relations-text').click();
    cy.get('#dropdown-relations>a').eq(2).click();
    cy.get('#games').children().should('have.length', 3);
  });

  it('An user should be able to review a played game', () => {
    cy.get('.btnPlay').eq(0).click({ force: true });

    cy.window().then($win => {
      cy.stub($win, eval(`'prompt'`)).returns('70');
    });

    cy.get('#dropdown-relations-text').click();
    cy.get('#dropdown-relations>a').eq(2).click();
    cy.get('#games').children().should('have.length', 1);
    cy.get('.btnPlay').eq(0).click({ force: true });

    cy.get('#dropdown-relations-text').click();
    cy.get('#dropdown-relations>a').eq(2).click();
    cy.get('#games').children().should('have.length', 1);
    cy.get('#games').children().eq(0).contains('70');
  });
});
