/* La méthode map crée un nouveau tableau rempli avec les résultats de l'appel d'une fonction appliquée sur chaque élément du tableau appelant
La méthode forEach() exécute une fonction passée en paramètre sur chaque élément du tableau

La première différence entre map() et forEach() est la valeur renvoyée
La méthode forEach() retourne undefined et map() quant à elle, retourne un nouveau tableau avec les éléments transformés
Même s'ils font le même travail, la valeur de retour reste différente
*/

/* 
forEach method 
La méthode forEach() exécute une fonction de rappel pour chaque élément du tableau, dans l'ordre.
Elle ne crée pas de nouveau tableau. Elle est principalement utilisée pour itérer sur un tableau et effectuer une action pour chaque élément, comme l'affichage, la modification ou la manipulation des éléments du tableau.
Elle ne renvoie pas de résultat.
*/
const numbersForEach = [1, 2, 3, 4, 5];
numbersForEach.forEach((number) => console.log("for each: ", number * 2));
 
/* 
map method 
La méthode map() crée un nouveau tableau en appliquant une fonction de transformation à chaque élément du tableau d'origine.
Elle retourne un nouveau tableau avec les résultats des appels de la fonction de rappel pour chaque élément.
Elle ne modifie pas le tableau d'origine.
Elle est utile lorsque vous souhaitez transformer chaque élément du tableau et récupérer les résultats dans un nouveau tableau.
*/
const numbersMap = [1, 2, 3, 4, 5];
const doubledNumbers = numbersMap.map((number) => number * 2);
console.log("map: ",doubledNumbers);

/* On choisit forEach pour une itération simple sans créer de nouveau tableau et map lorsqu'il faut transformer les éléments du tableau
et récupérer les résultats transformés dans un nouveau tableau */