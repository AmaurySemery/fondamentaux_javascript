// Prototype : propriété qui permet d'ajouter des méthodes / propriétés à tous les objets d'un type


class Dog {
    constructor(name) {
        this.name = name
    }

    bark() {
        console.log(`Waf waf, I am ${this.name}`)
    }
}

Dog.prototype.eat = function() {
    console.log(`[prototype] I am eating`)
}

const dog = new Dog("Leo")

dog.bark()
// Appelle la méthode de prototype
dog.eat()

const hello = "Hello world !"
console.log(hello.toUpperCase()) // HELLO WORLD !
// revient à appeler String.prototype.toUppercase

// Sachant que la méthode peut être modifiée

String.prototype.toUpperCase = function() {
    return this.replace('H', 'p')
}

console.log(hello.toUpperCase()) // pello world !