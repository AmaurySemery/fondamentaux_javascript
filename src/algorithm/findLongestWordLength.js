/*
Renvoie la longueur du mot le plus long de la phrase fournie.

Votre réponse doit être un nombre.
*/

function findLongestWordLength(str) {
    str = str.split(' ');
    const wordLengthArr = str.map(word => word = word.length);
    return Math.max(...wordLengthArr);
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");