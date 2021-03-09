// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
import 'cypress-file-upload';
import faker from 'faker';

Cypress.Commands.add('login', (email, password) => {
  cy.request({
    method: 'POST',
    url: '/api/login',
    body: { email, password },
  }).then(resp => {
    window.localStorage.setItem('token', resp.body.token);
    window.localStorage.setItem('user', JSON.stringify(resp.body.user));
  });
});

Cypress.Commands.add('logout', { timeout: 100000 }, () => {
  window.localStorage.clear();
});

Cypress.Commands.add('deleteUser', { timeout: 100000 }, () => {
  const token = window.localStorage.getItem('token');
  const user = JSON.parse(window.localStorage.getItem('user'));

  cy.request({
    method: 'DELETE',
    url: `/api/users/${user.id}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
});

Cypress.Commands.add('form_request', (url, method, formData) => {
  return cy
    .server()
    .route('POST', url)
    .as('formRequest')
    .window()
    .then(win => {
      const xhr = new win.XMLHttpRequest();
      xhr.open(method, url);
      xhr.send(formData);
    })
    .wait('@formRequest');
});

Cypress.Commands.add('createAuthenticatedUser', { timeout: 100000 }, () => {
  const data = {
    name: faker.name.findName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  };

  const formData = new FormData();
  formData.set('name', data.name);
  formData.set('email', data.email);
  formData.set('password', data.password);

  cy.form_request('/api/users', 'POST', formData);

  cy.request({
    method: 'POST',
    url: '/api/login',
    body: { email: data.email, password: data.password },
  }).then(resp => {
    window.localStorage.setItem('token', resp.body.token);
    window.localStorage.setItem('user', JSON.stringify(resp.body.user));
  });
});
