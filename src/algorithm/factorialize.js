/*
Renvoie la factorielle de l'entier fourni.

Si l'entier est représenté par la lettre n, une factorielle est le produit de tous les entiers positifs inférieurs ou égaux à n.

Les factorielles sont souvent représentées par la notation abrégéen!

Par exemple:5! = 1 * 2 * 3 * 4 * 5 = 120

Seuls les entiers supérieurs ou égaux à zéro seront fournis à la fonction.
*/

function factorialize(num) {
    var i, num, f = 1
    for (i = 1; i <= num; i++) {
        f *= i
    }
    return f
}

factorialize(5)