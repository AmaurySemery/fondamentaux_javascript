// Une promesse est un objet (Promise) qui représente la complétion ou l'échec d'une opération asynchrone
// Une promesse est un objet qui est renvoyé et auquel on attache des callbacks plutôt que de passer des callbacks à une fonction

// Exemple de base

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

// Pour bien visualiser, l'ancienne manière de faire :

function faireQqcALAncienne(successCallback, failureCallback) {
    console.log("C'est fait")
    // réussir une fois sur deux
    if (Math.random() > 0.5) {
      successCallback("Réussite")
    } else {
      failureCallback("Échec")
    }
  }
  
  function successCallback(résultat) {
    console.log("L'opération a réussi avec le message : " + résultat)
  }
  
  function failureCallback(erreur) {
    console.error("L'opération a échoué avec le message : " + erreur)
  }
  
  faireQqcALAncienne(successCallback, failureCallback)

  // Avec les promesses :

  function faireQqc() {
    return new Promise((successCallback, failureCallback) => {
      console.log("C'est fait");
      // réussir une fois sur deux
      if (Math.random() > 0.5) {
        successCallback("Réussite");
      } else {
        failureCallback("Échec");
      }
    });
  }
  
  const promise = faireQqc();
  promise.then(successCallback, failureCallback);

  // Voire, l'appel de fonction asynchrone :

  faireQqc().then(successCallback, failureCallback);

  /**
   Les garanties :
* Les callbacks ne seront jamais appelés avant la fin du parcours de la boucle d'évènements JavaScript courante
* Les callbacks ajoutés grâce à then seront appelés, y compris après le succès ou l'échec de l'opération asynchrone
* Plusieurs callbacks peuvent être ajoutés en appelant then plusieurs fois, ils seront alors exécutés l'un après l'autre selon l'ordre dans lequel ils ont été insérés.
   */