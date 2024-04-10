import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

Then("Le prix du produit est égale à {string}", (prix) => {
  cy.get('[data-test="inventory-item"]')
    .eq(0)
    .find('[data-test="inventory-item-price"]')
    .invoke("text")
    .then((value) => {
      expect(value).to.equal(prix);
    });
});

Then("Présence de {string} dans la description", (description) => {
  cy.get('[data-test="inventory-item-description"]')
    .eq(0)
    .contains(description)
    .should("be.visible");
});

When("Ajout du produit dand le panier", () => {
  cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
});

When("Le produit est bien ajouté dans le panier", () => {
  cy.get('[data-test="shopping-cart-badge"]').should("exist");
  cy.get('[data-test="shopping-cart-badge"]')
    .invoke("text")
    .then((value) => {
      expect(value).equal("1");
    });
  cy.get('[data-test="shopping-cart-link"]').click();
  cy.get('[data-test="inventory-item-name"]')
    .invoke("text")
    .then((value) => {
      expect(value).equal("Sauce Labs Backpack");
    });
});
