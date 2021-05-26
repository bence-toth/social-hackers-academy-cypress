/* eslint-disable no-undef */
/// <reference types="cypress" />

context("Settings", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("Dark mode can be turned on and off", () => {
    cy.assertDarkModeOn(false)
      .toggleDarkMode()
      .assertDarkModeOn(true)
      .toggleDarkMode()
      .assertDarkModeOn(false);
  });
});
