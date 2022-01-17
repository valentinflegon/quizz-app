# GEOQUIZ

## Context 
Le projet est un site de quiz sur les connaissances géographiques où plusieurs quiz seront disponibles. Le but de ces quiz sera d'approximer le nombre d'habitants pour une ville ou un pays donné, ainsi que la distance entre deux villes ou pays.
Un utilisateur pourra se créer un compte ou non pour jouer. Si le joueur est connecté, il aura accès à ses résultats personnels, et le résultat de ses parties sera enregistré.
N'importe quel joueur, qu'il soit connecté ou non, pourra jouer à tous les modes de jeu et pourra consulter le classement général des joueurs (enregistrés) par mode de jeu.
Nous allons nous servir de deux APIs externes pour obtenir les distances ou la population.
Pour la construction des questions, nous utilisons un fichier pour stocker une liste de villes disponible ainsi que les différents pays du monde. Nous chargeons ce fichier, puis nous sélectionnons de manière aléatoire la/les ville(s) ou pays pour la question, en les enlevant des données pour empêcher les doublons.
Notre base de données nous servira à stocker les informations d’un utilisateur (nom d’utilisateur, mot de passe et score). Les points (score) d’un utilisateur seront calculés en fonction de sa précision à répondre aux questions proposées par notre application.
L'application back fournira une API REST pour accéder à toutes ces informations.

## Techno
*  React 
*  MongoDB
*  Nodejs 
*  MUI 

Pour réaliser cette application web, plusieurs options concernant les choix techniques se présentaient à nous.\\
Récemment, nous avions développé avec l'équipe une application web (Jira-like) en Angular ce qui nous a amené à nous orienter vers React ou VueJS afin de monter en compétences sur un nouveau framework. De ce fait, nous nous sommes dirigés vers React pour plusieurs raisons. D'un point de vue "Tendance du marché", React est le framework le plus demandé depuis 2015, ce qui nous incite à penser qu'il va prochainement dépasser Angular. D'un point de vue des performances React se situe en tête du classement comparé à Angular et à VueJS. React dispose également d'une très grande communauté de développeurs (plusieurs millions) ce qui peut être utile lorsqu'on rencontre des problèmes.\\

Coté front, nous avions commencé à coder sans aucune librairie externe, ce qui était une mauvaise idée... Comme vous l'aurez compris, nous avons vite changé d'avis, car note application Web ressemblait à une application Web des années 2000 (voir 1990). De ce fait, nous avons donc choisi d'utiliser la librairie Material-UI. MUI est une bibliothèque de composant React, cette librairie nous a permis d'améliorer de manière conséquente notre application Web d'un point de vue visuel.\\

Pour la base de données, nous avons choisi MongoDB (orientée document) car cette base de données NoSQL se révèle très flexible et adaptée aux cas d’usage concrets d’une entreprise (nous en avons vu sur plusieurs propositions de stages). MongoDB est flexible, car elle n'implique aucune contrainte en termes de structure des documents. Les données n’ont pas de schéma préconçu, et c’est cette flexibilité qui rend MongoDB si puissant et simple à prendre en main. La modélisation des données et la structure des documents doivent uniquement répondre aux besoins de l’utilisateur. Il convient de prendre en compte les besoins de notre application, et donc savoir quels seront les données et les types de données nécessaires au fonctionnement de notre application.\\

Coté authentification, nous avons utilisé "bcryptjs" qui est une librairie JavaScript permettant de hasher un mot de passe lors de l'inscription d'un utilisateur. Cette librairie nous permet également d'accéder à une fonction capable de comparer un mot de passe hashé avec un mot de passe écrit par un utilisateur lors de sa connexion.\\

Pour le déploiement, nous avons choisi d'utiliser Docker. Docker va nous faciliter le déploiement de notre application sur plusieurs OS différent. Par exemple dans l'équipe, nous utilisons les OS Window, Linux et Mac. \\ 

Par la suite, nous allons utiliser Swagger qui est un langage de description d'interface permettant de décrire notre API RESTful.\\

Pour conclure cette partie, nous pouvons annoncer que nous nous sommes dirigés vers une application MERN Stack. MERN Stack est un ensemble de technologies Javascript utilisé pour un déploiement rapide des applications Web. MERN comprend 4 technologies, MongoDB pour la gestion de base de données, le framework Javascript Back-End Express JS, le serveur JavaScript NodeJS et React pour le front. Le Stack MERN est conçu pour rendre le processus de développement fluide et facile.\\

## APIs
Dans ce projet, nous allons utiliser deux API tierces.

### DISTANCE API

La première est une API qui permet de calculer les distances entre des lieux.
Son nom est DISTANCE API, elle retourne un json avec de nombreuses informations dont la distance.
L'URL ressemble à cela \url{https://fr.distance24.org/route.json?stops=FRANCE|CHINE}  retourne 8033km, la distance entre la France et la Chine. \\
Entre deux villes par exemple Bordeaux-Marseille \url{https://fr.distance24.org/route.json?stops=Bordeaux|Marseille}
 cela donne 506km. \\


### POPULATION API

Population par ville/pays \\
L'API countriesnow.space permet via des méthodes POST (détaillées ci-dessous) de récupérer certaines informations à propos d'une ville ou d'un pays, contenant la population. Néanmoins, les populations ne sont pas forcément les plus récentes enregistrées par les relevés internationaux.\\
\\
    \begin{lstlisting}
    ### population ville
    POST https://countriesnow.space/api/v0.1/countries/population/cities
    content-type: application/json
    {
      "city":"Canberra"
    }
    
    ### population pays
    POST https://countriesnow.space/api/v0.1/countries/population
    Content-Type: application/json
    
    {
      "country": "Libya"
    }
    \end{lstlisting}

## Lancer le projet 

### Le back 
Dans /quizz-app/server:

$ npm i

$ npm start

### Le front
Dans /quizz-app/client:

$ npm i

$ npm start
