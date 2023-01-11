/// <reference types="Cypress" />

describe("Navigating", function () {
  it("navigating each component", function () {
    cy.visit("http://localhost:3000/");
    //get resister page
    cy.get('[href="/signin"] > .sc-eDvSVe').click();
    //   cy.get('#standard-basic-1').type('jee');
    cy.get("marquee").should(
      "have.text",
      " Super Deal! Free Shipping on Orders Over Rs.2800"
    );
    cy.get("#standard-basic-3").type("9898989898");
    cy.get("#standard-basic-4").type("j@gmail.com");
    cy.get("#standard-basic-5").type("Jeevan@1");
    cy.get(".MuiButtonBase-root").click();
    cy.on("window:alert", (str) => {
      expect(str).to.equal("Please enter your first name");
    });

    // cy.get('#standard-basic\=5').type('jjj')
    // cy.get('#standard-basic\=5')
  });
});
