/*
Répéter une chaîne donnée str (premier argument) pour num les heures (deuxième argument). 
Renvoie une chaîne vide si num n'est pas un nombre positif. 
*/

function repeatStringNumTimes(str, num) {
    if (num <= 0) {
        return ""
    }

    var repeatedString = ""

    for (var i = 0; i < num; i++) {
        repeatedString += str
    }

    return repeatedString
}

console.log(repeatStringNumTimes("abc", 3))

// abcabcabc