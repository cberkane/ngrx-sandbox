# NgRx Todo Application

Petit résumé de la librairie **NgRx**.

---

## 1. **Architecture mise en place**
```text
src/app/state/
├── actions/
├── effects/
├── models/
├── reducers/
├── services/
├── app.state.ts
```

## 2. ** Les étapes du pattern NgRx **

### a) **Créer les modèle pour l'entité à gérer  **
Pour une entité `Todo`, créer l'interface `Todo` et `TodoState`.

### b) **Définir  les actions**
Créer les et actions.

### c) **Créer les reducers associés aux actions**
Créer les et actions.

### d) **Créer les reducers associés aux actions**
Créer les et actions.

### e) **Effects**
Les effects gèrent les opérations asynchrones, comme les appels API.

### f) **Service pour les appels API**
Un service Angular simule ou effectue les appels vers une API :

### g) **Interagir avec le store**
Le composant interagit avec le store pour afficher et gérer les Todos.
