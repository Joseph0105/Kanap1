#Bienvenue sur le projet 5 de la formation OpenClassrooms ! C'est le premier projet où je travaille avec un backend.

## Implémentation dynamique

Après avoir réalisé l'intégration HTML/CSS, j'ai eu pour mission d'implémenter le site de manière dynamique. Il a fallu, par exemple, intégrer dynamiquement les éléments contenus dans l'API de la base de données (produits, prix, couleurs, etc.).

## Structure du site

Le site se compose :

- d'une page d'accueil affichant de manière dynamique tous les articles disponibles à la vente.
- d'une page produit qui affiche dynamiquement les détails du produit sélectionné.
- d'une page panier récapitulant les achats du client.
- d'une page de confirmation renvoyant toutes les informations de l'utilisateur ainsi qu'un identifiant de commande envoyé par le backend.

Ce projet m'a demandé de manipuler de nombreux concepts en JavaScript natif.

### Gestion du local storage

Par exemple, la gestion du local storage pour stocker des informations du client, telles que les articles sélectionnés, leurs prix, les informations utilisateur. Mais j'ai veillé à ne pas laisser d'informations sensibles (identifiant de commande) dans le local storage pour des raisons de sécurité.

### Communication avec une API

Il a fallu communiquer avec une API et récupérer des informations spécifiques. J'ai utilisé la méthode FETCH ici, avec la requête GET pour obtenir des informations et la requête POST pour envoyer la commande au backend.

### Vérification d'information

J'ai utilisé des REGEX pour vérifier si les données de l'utilisateur sont correctes (nom, email, téléphone...)

### Affichage dynamique

J'ai appris à afficher dynamiquement des éléments sur une page en utilisant createElement, par exemple, ou textContent pour remplir du texte.

### Hébergement du backend

Pour ce projet je n'ai pas l'héberger simplement sur github Pages comme les autres, car le serveur et la base de donnée (Mondo DB) tourne sur Node.js, j'ai doc héberger le back end sur Heroku. le front lui est toujours sur github Pages, qui remplis mes besoins actuel.

## Conclusion

Ce projet fut un excellent exercice pour confirmer mes connaissances en JavaScript natif. Bonne visite !
