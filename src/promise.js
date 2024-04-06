const getCarFromAPI = (idCar) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const database = {
                1: { marque: "Renault", modele: "Clio", year: 2020 },
                2: { marque: "Peugeot", modele: "208", year: 2021 },
            }

            const car = database[idCar]

            if (car) {
                resolve(car)
            } else {
                reject(`Aucune voiture trouvée avec l'ID: ${idCar}`)
            }
        }, 1000)
    })
}

getCarFromAPI(1)
    .then((car) => {
        console.log(`Marque: ${car.marque}, Modèle: ${car.modele}, Année: ${car.year}`)
    })
    .catch((error) => {
        console.error(error)
    })