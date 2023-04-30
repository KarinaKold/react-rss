/// <reference types="cypress" />
// @ts-check
// cypress/support/e2e.js

import '@cypress/code-coverage/support';

describe('template spec', () => {
  it('check routes', () => {
    cy.visit('/');
    cy.contains('React app').click();
    cy.contains('Home').click();
    cy.contains('Form');
    cy.contains('About');
  });

  it('open Home page with modal window', () => {
    cy.visit('/');
    cy.contains('IPHONE 9').click();
    cy.contains('Brand: Apple');
    cy.contains('Category: smartphones');
  });

  it('search input', () => {
    cy.visit('/');
    cy.contains('IPHONE 9');
    cy.get('[class="search-form"]').type('IPHONE 9{enter}');
    cy.contains('IPHONE 9');
  });

  it('open About page', () => {
    cy.visit('/about');
    cy.contains('About Us');
    cy.contains('This is an About page');
  });

  it('open notFound page', () => {
    cy.visit('/notFound');
    cy.contains('404');
    cy.contains('Page not found');
    cy.contains('Go back home').click();
  });

  it('open form page', () => {
    cy.visit('/form');
    cy.contains('Form');
    cy.get('[class="user-form_username"]').type('User name');
    cy.contains('Submit').click();
    cy.contains('The length must be at least 2 small characters in English');
    cy.get('[class="user-form_username"]').type('username');
    cy.get('[class="user-form_date"]').type('2023-01-01');
    cy.get('[class="user-form_file"]').selectFile('./src/assets/react.svg');
    cy.get('[class="user-form_country"]').select('Narnia');
    cy.get('[type="radio"]').last().check();
    cy.get('[type="checkbox"]').click();
    cy.contains('Submit').click();
  });

  it('End Test', () => {
    expect(true).to.equal(true);
  });
});
