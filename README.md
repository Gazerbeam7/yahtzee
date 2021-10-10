# Yahtzee - Tests Unitaires



Projet réalisé par Cyril Tournier et Théo Charron pour le cours de "tests unitaires et propreté de code"

Le but était de créer le jeu du Yahtzee sans interface graphique et réaliser les tests afin de vérifier que le jeu s'executera correctement.

Dans ce cas, les tests vont vérifier que marchent :

- La chance
- 3 of a kind (3 dés sur 5 ont le même numéro)
- 4 of a kind
- 5 of a kind
- La petite suite (4 chiffres qui se suivent, => 1,2,3,4 - 2,3,4,5 - 3,4,5,6 )
- La grande suite (les 5 chiffres se suivent, => 1,2,3,4,5 - 2,3,4,5,6 )
- Yahtzee => 5 chiffres identiques
- les sommes des combinaisons choisies sont aussi testés

Le projet a été réalisé à l'aide de Node JS et de Jest, un framework de test javascript.
