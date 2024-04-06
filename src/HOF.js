const numbers = [1, 2, 3]
const square = (x) => x * x
const numberSquared = numbers.map(square)
console.log(numberSquared)

// map est une HOF. Si on voulait recoder une HOF, ça donnerait ceci :

const customMap = (array, callback) => {
    const newArray = []

    for (let i = 0; i < array.length; i++) {
        const element = array[i]
        const result = callback(element)
        newArray.push(result)
    }

    return newArray
}