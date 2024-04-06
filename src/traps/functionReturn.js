const myCorrectFunction = () => {
    // retourne { test: 2 }
    return {
        test: 2,
    }
}

console.log(myCorrectFunction())

const myBadFunction = () => {
    return // retourne ce qui est sur la même ligne, soit [Function: myBadFunction]
    {
        test: 2;
    }
}

console.log(myBadFunction)