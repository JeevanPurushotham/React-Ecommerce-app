/// <reference types="Cypress" />

describe("Navigating", function () {
  it("navigating each component", function () {
    cy.visit("http://localhost:3000/");
    cy.get('[href="/login"] > .sc-eDvSVe').click();
    cy.get("marquee").should(
      "have.text",
      " Super Deal! Free Shipping on Orders Over Rs.2800"
    );
    cy.on("window:alert", (str) => {
      expect(str).to.equal("password must contains 8 special characters");
    });
  });
});

