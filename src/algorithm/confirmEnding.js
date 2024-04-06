// Vérifier si une chaîne (premier argument, str) se termine par la chaîne cible donnée (deuxième argument, target).

function confirmEnding(str, target) {
    var endOfString = str.substr(-target.length)
    return endOfString === target
}

console.log(confirmEnding("Bastian", "n"))

// true