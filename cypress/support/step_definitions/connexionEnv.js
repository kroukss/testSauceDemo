import { When } from "@badeball/cypress-cucumber-preprocessor";

When(
  "Connexion à sauce demo en utilisant les variables d'environnement",
  () => {
    cy.get('[data-test="username"]').type(Cypress.env("identifiant"));
    cy.get('[data-test="password"]').type(Cypress.env("password"));
    cy.get("#login-button").click();

    if (Cypress.env("identifiant") === "standard_user") {
      cy.contains("Products").should("be.visible");
      cy.get("#inventory_container").should("exist");
    } else if (Cypress.env("identifiant") === "locked_out_user") {
      cy.contains("Sorry, this user has been locked out.").should("be.visible");
    }
  }
);
