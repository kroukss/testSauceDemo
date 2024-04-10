import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("Tri des produits du moins cher au plus cher", () => {
  cy.get('[data-test="product-sort-container"]').select("Price (low to high)");
});

Then("Les produits sont bien triés", () => {
  let liste = [];
  for (let i = 0; i < 6; i++) {
    cy.get('[data-test="inventory-item-price"]')
      .eq(i)
      .invoke("text")
      .then((value) => {
        liste.push(parseFloat(value.replace("$", "")));
        cy.log(liste[i]);
      });
  }
  cy.wrap().should(() => {
    for (let i = 0; i < liste.length - 1; i++) {
      expect(liste[i]).to.be.at.most(liste[i + 1]);
    }
  });
});
