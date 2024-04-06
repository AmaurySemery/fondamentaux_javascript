// Undefined = non défini => involontaire

let userName
console.log(userName)

const arrowFunction = (params) => {
    console.log({params})
}

arrowFunction()

// NULL = pas de valeur => volontaire

let userLastname = null
console.log(userLastname)

const userChangeUserLastname = () => {
    userLastname = "Amaury"
    console.log(userLastname)
}

userChangeUserLastname()