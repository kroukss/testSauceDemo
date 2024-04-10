import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("Valide le panier", () => {
  cy.get('[data-test="checkout"]').click();
});

When("Renseigne les informations de l'acheteur", (dataTable) => {
  dataTable.hashes().forEach((d) => {
    const prenom = d["First Name"];
    const nom = d["Last Name"];
    const codePostal = d["Zip/Postal Code"];

    cy.get('[data-test="firstName"]').type(prenom);
    cy.get('[data-test="lastName"]').type(nom);
    cy.get('[data-test="postalCode"]').type(codePostal);

    cy.get('[data-test="continue"]').click();
  });
});

When("Valide le paiement", () => {
  cy.get('[data-test="payment-info-value"]')
    .invoke("text")
    .then((value) => {
      cy.task("setInfoPaiement", value);
    });
  cy.get('[data-test="finish"]').click();
});

Then("Affichage du message de succès", () => {
  cy.task("getInfoPaiement").then((info) => {
    cy.log("Numéro de la commande :", info);
    cy.get('[data-test="title"]')
      .should("exist")
      .invoke("text")
      .then((value) => {
        expect(value).equal("Checkout: Complete!");
      });
    cy.contains("Thank you for your order!").should("be.visible");
  });
});
