describe("Sipariş Formu", () => {

  beforeEach(() => {
    cy.visit("http://localhost:5173/order");
  });

  it("inputa metin girilebilmeli", () => {
    cy.get('[data-cy="name-input"]')
      .type("Ahmet");

    cy.get('[data-cy="name-input"]')
      .should("have.value", "Ahmet");
  });


  it("birden fazla malzeme seçilebilmeli", () => {
    cy.get('[data-cy="ingredient-Pepperoni"]')
      .check();

    cy.get('[data-cy="ingredient-Soğan"]')
      .check();

    cy.get('[data-cy="ingredient-Mısır"]')
      .check();

    cy.get('[data-cy="ingredient-Sosis"]')
      .check();

    cy.get('[data-cy="ingredient-Pepperoni"]')
      .should("be.checked");

    cy.get('[data-cy="ingredient-Soğan"]')
      .should("be.checked");

    cy.get('[data-cy="ingredient-Mısır"]')
      .should("be.checked");

    cy.get('[data-cy="ingredient-Sosis"]')
      .should("be.checked");
  });


  it("form gönderilebilmeli", () => {
    cy.get('[data-cy="name-input"]')
      .type("Ahmet");

    cy.get('[data-cy="ingredient-Pepperoni"]')
      .check();

    cy.get('[data-cy="ingredient-Soğan"]')
      .check();

    cy.get('[data-cy="ingredient-Mısır"]')
      .check();

    cy.get('[data-cy="ingredient-Sosis"]')
      .check();

    cy.get('[data-cy="submit-order"]')
      .should("not.be.disabled")
      .click();

    cy.url().should("include", "/success");
  });

});