// Closure : le fait qu'une fonction a toujours accès à la scope du dessus

// Ici, le x de la ligne 6 a accès au x de la ligne 4
const addTo = (x) => {
    const add = (y) => {
        return x + y
    }
    return add
}

// Les scopes sont définies par les crochets {} dans une fonction
// Le closure consiste donc à créer des fonctions dans des fonctions enfermées dans une fonction, qui ont accès au scope de leur parent
// Tout ça pour interagir par exemple avec les paramètres de leur parent

const addToTen = addTo(10)

console.log(addToTen(3)) // 13
console.log(addToTen(10)) // 20

console.log(addToTen(10)(3)) // 13 car ça a additionnée 10 et 3