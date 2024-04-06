// Renvoie les plus grands nombres dans des tableaux

function largestOfFour(arr) {
    return arr.map(subArray => {
        console.log(Math.max.apply(null, subArray))
        return Math.max.apply(null, subArray)
    })
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])

/*
5
27
39
1001
*/