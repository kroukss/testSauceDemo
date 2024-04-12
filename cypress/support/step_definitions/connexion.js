import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("L'utilisateur se rend sur sauce demo", () => {
  cy.visit("https://www.saucedemo.com");
});

When(
  "Renseigne son identifiant {string} et son mot de passe {string}",
  (identifiant, mdp) => {
    cy.get('[data-test="username"]').type(identifiant);
    cy.get('[data-test="password"]').type(mdp);
    cy.get("#login-button").click();
  }
);

When("Connexion à sauce demo en utilisant les fixtures", () => {
  cy.fixture("connexion").then((data) => {
    this.data = data;
    cy.get('[data-test="username"]').type(data.username);
    cy.get('[data-test="password"]').type(data.password);
    cy.get("#login-button").click();
  });
});

Then("Affichage de la page d'accueil", () => {
  cy.contains("Products").should("be.visible");
  cy.get("#inventory_container").should("exist");
});

Then("Affichage du message d'erreur", () => {
  cy.contains("Sorry, this user has been locked out.").should("be.visible");
});
