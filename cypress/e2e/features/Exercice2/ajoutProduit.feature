Feature: Ajout du produit dans le panier
    Background: 
        Given L'utilisateur se rend sur sauce demo
        When Renseigne son identifiant "standard_user" et son mot de passe "secret_sauce"
        And Affichage de la page d'accueil
   
    Scenario: Vérification du prix du produit
        Then Le prix du produit est égale à "$29.99"
  
    Scenario: Vérification de la présence dans la description
        Then Présence de "carry.allTheThings()" dans la description
 
    Scenario: Ajout du produit dans le panier
        And Ajout du produit dand le panier
        Then Le produit est bien ajouté dans le panier
        And Le prix du produit est égale à "$29.99"
   