Feature: Connexion 
    Background: 
        Given L'utilisateur se rend sur sauce demo
    
    Scenario: Se connecter sur sauce demo avec un user standard
        When Renseigne son identifiant "standard_user" et son mot de passe "secret_sauce"
        Then Affichage de la page d'accueil
  
    Scenario: Renseigne un compte bloqué
        When Renseigne son identifiant "locked_out_user" et son mot de passe "secret_sauce"
        Then Affichage du message d'erreur
   
    Scenario: Se connecter sur sauce demo avec les fixtures
        When Connexion à sauce demo en utilisant les fixtures
        Then Affichage de la page d'accueil
