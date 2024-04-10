Feature: Passer la commande d'un produit
    Background: 
        Given L'utilisateur se rend sur sauce demo
        When Renseigne son identifiant "standard_user" et son mot de passe "secret_sauce"
        And Affichage de la page d'accueil
   
    Scenario: Passer la commande d'un produit
        And Ajout du produit dand le panier
        And Le produit est bien ajouté dans le panier
        And Le prix du produit est égale à "$29.99"
        And Valide le panier
        And Renseigne les informations de l'acheteur
           | First Name | Last Name | Zip/Postal Code |
           | John | Doe | 69001 |
        And Valide le paiement
        Then Affichage du message de succès