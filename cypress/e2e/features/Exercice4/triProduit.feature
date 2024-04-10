Feature: Trier les produits
    Background: 
        Given L'utilisateur se rend sur sauce demo
        When Renseigne son identifiant "standard_user" et son mot de passe "secret_sauce"
        And Affichage de la page d'accueil
   
    Scenario: Tri des produits du moins cher au plus cher
        And Tri des produits du moins cher au plus cher
        Then Les produits sont bien triés