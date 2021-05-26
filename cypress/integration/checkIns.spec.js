/* eslint-disable no-undef */
/// <reference types="cypress" />

context("Mood tracking", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("Check-ins interface expands and collapses", () => {
    cy.assertCheckInsOpen(false)
      .showCheckIns()
      .assertCheckInsOpen(true)
      .hideCheckIns()
      .assertCheckInsOpen(false);
  });

  it("Check-ins are registered when check-ins interface is closed", () => {
    cy.checkIn(1)
      .checkIn(3)
      .checkIn(5)
      .checkIn(3)
      .showCheckIns()
      .assertAverageMood(3)
      .assertMoods([1, 3, 5, 3]);
  });

  it("Check-ins are registered when check-ins interface is open", () => {
    cy.showCheckIns()
      .checkIn(1)
      .checkIn(3)
      .checkIn(5)
      .checkIn(3)
      .assertAverageMood(3)
      .assertMoods([1, 3, 5, 3]);
  });
});
