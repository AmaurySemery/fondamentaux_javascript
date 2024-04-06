console.log(1)
setTimeout(() => console.log(2))
Promise.resolve().then(() => console.log(3))
new Promise(() => {
    console.log(4)
})
console.log(5)

// Ordre de réponse : 1 4 5 3 2