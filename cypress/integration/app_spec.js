describe("BBC news test", () => {
  it("Has the correct title", () => {
    cy.visit("https://www.bbc.co.uk/news");

    cy.get(".nw-c-nav__wide li").should("have.length", 12);
  });

  it("Has a link to terms of use", () => {
    cy.visit("https://www.bbc.co.uk/news");

    cy.get(".orb-footer-terms a").should("have.text", "Terms of Use");
  });
});
