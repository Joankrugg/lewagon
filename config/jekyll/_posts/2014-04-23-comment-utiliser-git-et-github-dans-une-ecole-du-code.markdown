---
layout: post
title:  "Comment utiliser git et GitHub dans une école du code"
date:   2014-04-23
---

**Écrit par Sébastien ([@ssaunier](https://twitter.com/ssaunier))**

[Première Classe](/premiere) est la formation-tremplin de 2 mois à temps plein créé par Le Wagon. Elle donne les clés à ses élèves-entrepreneurs pour devenir autonome en développement web en un temps record. Cette formation intensive se compose d'une majorité de travaux dirigés, durant lesquels les élèves travaillent sur des exercices de programmation.

Pour cette deuxième édition du bootcamp, Le Wagon innove en améliorant son flux de travail en prenant en compte les besoins suivants :

1. Les professeurs peuvent apporter des modifications de dernière minute aux énoncés.
1. Les élèves doivent ensuite télécharger une version à jour des exercices.
1. Les élèves peuvent accéder au corrigé de chaque exercice.

## Normalisation d'un exercice

Les professeurs se sont tout d'abord accordés sur un format d'exercice, afin de pouvoir le **corriger** de manière systématique. Voici un dossier type pour un exercice se nommant `exercise_foo`.

```
exercise_foo
|-- README.md
|-- Rakefile
|-- lib
|   `-- exercise_foo.rb
`-- spec
    |-- spec_helper.rb
    `-- exercise_foo_spec.rb
```

Le fichier `README.md` contient l'énoncé de l'exercice, écrit en syntaxe
[Markdown](https://daringfireball.net/projects/markdown/). Le dossier `lib` accueillera la solution de l'élève (exercice "à trous"). Le dossier `spec` contient les tests qui servent de corrigés automatiques.


## Corriger un exercice par le TDD

La pratique du TDD (*Test Driven Development*, ou développement piloté par les tests) permet aux élèves d'avoir une correction automatique et instantanée de leur solution tout en les familiarisant avec cette pratique.

En résumé, les professeurs écrivent les tests (corrigés / spécifications), les élèves écrivent le code (solution de l'exercice).

## Collaboration élèves / professeurs

Le premier jour de la formation [Premiere Classe](/premiere) a été consacré à deux objectifs :

1. Configurer les ordinateurs de chaque élève pour avoir un environnement de travail sain ([détails](https://github.com/lewagon/setup))
1. Apprendre les [rudiments de Git et Github](http://sebastien.saunier.me/git-intro/#/) (prenez votre billet pour le prochain [Wagon-bar](http://www.lewagon.org/learn/debuter-avec-git-github) !)

Git est un outil de gestion de versions qui permet de travailler sereinement sur son code. En effet, on peut réaliser des photographies de son code à un instant *t* (`git commit`), et y revenir à tout moment. Pensez à votre utilisation de Word ou Excel, vous tapez sans doute `CTRL+S` toutes les cinq secondes.

D'autre part, git permet de **partager** son code, notamment sur [GitHub](https://github.com/), qu'on peut considérer comme un réseau social de programmeurs. Ce qui nous intéresse ici, c'est que les élèves publient leur code de manière à ce qu'ils puissent lire les solutions de chacun, et bien sûr pour que les professeurs puissent jeter un oeil.

Les élèves ont donc tous **forké** en début de bootcamp le **repo** des exercices, et peuvent à tout moment récupérer les mises à jour des professeurs (`git pull`). Ils peuvent également envoyer leur solution sur GitHub (`git push`). Le schéma ci-dessous indique les différents flux de données.

<div class="center">
  <img src="/jekyll/git-students.png" style="max-width: 400px" />
</div>

Les lecteurs les plus avertis sur git auront remarqués que les élèves ont deux `remote`s configurées pour leur repo local :

1. `origin`, qui correspond à leur propre repo sur Github, sur lesquels ils peuvent `push` pour soumettre leurs solutions.
1. `upstream`, qui correspond au repo des professeurs, sur lequel ils peuvent `pull` pour récupérer les dernières mises à jour des énoncés.

## Tableau de bord de la classe

Toute cette normalisation (du format des exercices) et cette automatisation (corrigés automatiques par des tests) a permis de mettre en place un système d'aggrégation de la classe sur notre plateforme pédagogique. Ainsi, les professeurs peuvent visualiser le niveau général d'avancement de la classe, et repérer les élèves en difficulté pour les racrocher au wagon le plus tôt possible.

Ce tableau de bord n'existerait pas sans les [Webhooks](https://developer.github.com/v3/repos/hooks/) de GitHub. À chaque fois qu'un élève `push` sa solution sur `origin`, GitHub envoie une requête `HTTP` de type `POST` à la plateforme pédagogique, avec les informations concernant les derniers `commit` de l'élève. Cela permet à la plateforme de récupérer le code de l'élève et de lancer les tests avec la commande `rake`. Le resultat de cette correction automatique est stockée en base de données et sert lors de l'affichage du dashboard élève.

En reprenant le schéma précédent, on peut ajouter au dessus la plateforme pédagogique :

<div class="center">
  <img src="/jekyll/git-kitt.png" style="max-width: 400px" />
</div>

## Conclusion

Nous avons pu exploiter la notion de [dépôt distant](http://git-scm.com/book/fr/Les-bases-de-Git-Travailler-avec-des-d%C3%A9p%C3%B4ts-distants) (`remote`) pour permettre un flux de travail élèves / professeurs fluide et efficace. Les lecteurs observateurs auront remarqué que les schémas ne font pas mention du Wagon. En effet, il n'y a pas de spécificité, ce flux de travail peut être répliqué **dans n'importe quelle salle de classe de programmation** !

Merci à GitHub pour cette plateforme extraordinaire et ses Webhooks. Professeurs, allez faire un tour du côté de [GitHub Education](https://education.github.com/).

Vous êtes porteur de projet mais débutant en code ? Alors foncez vous inscrire pour un programme riche et intense de 9 semaines, [Première Classe](/premiere) ! Prochains départs en Juillet et en Octobre.

