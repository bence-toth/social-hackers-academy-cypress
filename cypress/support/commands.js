/* eslint-disable no-undef */
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
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("assertCheckInsOpen", (shouldBeOpen) => {
  if (shouldBeOpen) {
    cy.get("[data-test-id='checkIns']")
      .invoke("outerHeight")
      .should("be.gt", 0);
  } else {
    cy.get("[data-test-id='checkIns']")
      .invoke("outerHeight")
      .should("be.eq", 0);
  }
});

Cypress.Commands.add("showCheckIns", () => {
  cy.get("[data-test-id='showCheckIns']").click();
});

Cypress.Commands.add("hideCheckIns", () => {
  cy.get("[data-test-id='hideCheckIns']").click();
});

Cypress.Commands.add("checkIn", (mood) => {
  cy.get(
    `[data-test-id='registerMoodButton'][data-test-value='${mood}']`
  ).click();
});

Cypress.Commands.add("assertAverageMood", (averageMood) => {
  cy.get('[data-test-id="averageMood"]')
    .invoke("attr", "data-test-value")
    .should("be.eq", `${averageMood}`);
});

Cypress.Commands.add("assertMoods", (moods) => {
  moods.forEach((mood, moodIndex) => {
    cy.get("[data-test-id='checkInListItem']")
      .eq(moodIndex)
      .invoke("attr", "data-test-value")
      .should("be.eq", `${mood}`);
  });
});

Cypress.Commands.add("assertDarkModeOn", (shouldBeOn) => {
  cy.get("[data-test-id='app']")
    .invoke("attr", "data-test-dark-mode")
    .should("be.eq", `${shouldBeOn}`);
});

Cypress.Commands.add("toggleDarkMode", () => {
  cy.get("[data-test-id='hamburgerMenu']")
    .click()
    .get("[data-test-id='darkModeToggleButton']")
    .click()
    .get("[data-test-id='hamburgerMenu']")
    .click();
});
