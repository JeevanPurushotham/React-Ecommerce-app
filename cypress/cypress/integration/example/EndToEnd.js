describe("E-commerce testCases", function () {
  it("Testing E2E ", function () {
    cy.visit("http://localhost:3000/");

    //Checking heading
    cy.get(".sc-dkrFOg").should("have.text", "ShipFast💸");
    cy.get(".kbxIwt > .sc-kDvujY > .sc-ipEyDJ").should(
      "have.text",
      "SUMMER SALE"
    );

    //Navigating product page
    cy.get(":nth-child(2) > .sc-hBxehG > a > .sc-fEXmlR").click();
    cy.wait(5000);

    //Selecting a product
    cy.get(".card-body");
    cy.get(':nth-child(19) > .card > .card-body > .btn').click();

    //Add to cart
    cy.get("button.btn").click();

    //Goto cart
    cy.get("a.btn").click();

    //To Increase item
    // cy.get('.row > :nth-child(2) > :nth-child(4)').click();

    //To Decrease item
    // cy.get(".me-4").click();

    //To Check-out
    cy.get(".row > .btn").click();
  });
});
