// Les arrow functions sont une manière plus concise de déclarer des fonctions

console.log(regularFunction(4))

// Par exemple
// Ici, une regular function
function regularFunction(x) {
    return x * x
}

// Ici, une arrow function
const myFunction = (x) => { return x * x}

// Si on veut faire une implicit return, ça donne
const arrowFunction = (x) => x * x

// La différence principale entre regular et arrow function, c'est le Hoisting
// Une regular function peut être appelée même avant qu'elle ne soit déclarée
// Les fonctions régulières sont déplacées en haut du script lors de l'exécution
// Les arrow functions n'implémentent pas ce concept de Hoisting, il faut donc appeler la fonction après sa déclaration

console.log(arrowFunction(6))