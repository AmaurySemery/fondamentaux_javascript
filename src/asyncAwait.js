// Une fonction asynchrone est une fonction précédée par le mot-clé async, et qui peut contenir le mot-clé await
// async et await permettent un comportement asynchrone, basé sur une promesse (Promise), écrite de façon simple, et évitant de configurer explicitement les chaînes de promesse
// Ils n'ajoutent aucune fonctionnalité en soi mais fournissent une syntaxe plus intuitive et plus claire pour définir des fonctions asynchrones et utiliser des promesses

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

// Utilisation de la fonction avec async/await
const displayCar = async(id) => {
    try {
        const car = await getCarFromAPI(id)
        console.log(`Marque: ${car.marque}, Modèle: ${car.modele}, Année: ${car.year}`)
    } catch (error) {
        console.error(error)
    }
}

displayCar(1)

// Les promesses :

function getProcessedData(url) {
    return downloadData(url) // renvoie une promesse
      .catch((e) => {
        return downloadFallbackData(url); // renvoie une promesse
      })
      .then((v) => {
        return processDataInWorker(v); // renvoie une promesse
      });
  }

  // Versus la fonction asynchrone :

  async function getProcessedData(url) {
    let v;
    try {
      v = await downloadData(url);
    } catch (e) {
      v = await downloadFallbackData(url);
    }
    return processDataInWorker(v);
  }

  // Un exemple plus complet de fonctions asynchrones :

  var resolveAfter2Seconds = function () {
    console.log("Initialisation de la promesse lente");
    return new Promise((resolve) => {
      setTimeout(function () {
        resolve("lente");
        console.log("La promesse lente est terminée");
      }, 2000);
    });
  };
  
  var resolveAfter1Second = function () {
    console.log("Initialisation de la promesse rapide");
    return new Promise((resolve) => {
      setTimeout(function () {
        resolve("rapide");
        console.log("La promesse rapide est terminée");
      }, 1000);
    });
  };
  
  var sequentialStart = async function () {
    console.log("==Début séquentiel==");
  
    // 1. L'exécution atteint ce point quasi-instantanément
    const lente = await resolveAfter2Seconds();
    console.log(lente); // 2. cela s'exécute 2s après 1.
  
    const rapide = await resolveAfter1Second();
    console.log(rapide); // 3. cela s'exécute 3s après 1.
  };
  
  var concurrentStart = async function () {
    console.log("==Début concurrentiel avec await==");
    const lente = resolveAfter2Seconds(); // le minuteur démarre immédiatement
    const rapide = resolveAfter1Second(); // le minuteur démarre immédiatement
  
    // 1. L'exécution atteint ce point quasi-instantanément
    console.log(await lente); // 2. s'exécute 2s après 1.
    console.log(await rapide); // 3. s'exécute 2s après 1., immédiatement après 2.,
    // car "rapide" est déjà résolue
  };
  
  var concurrentPromise = function () {
    console.log("==Début concurrentiel avec Promise.all==");
    return Promise.all([resolveAfter2Seconds(), resolveAfter1Second()]).then(
      (messages) => {
        console.log(messages[0]); // lente
        console.log(messages[1]); // rapide
      },
    );
  };
  
  var parallel = async function () {
    console.log("==Exécution parallèle avec await Promise.all==");
  
    // Démarre 2 tâches en parallèle et on attend que les deux soient finies
    await Promise.all([
      (async () => console.log(await resolveAfter2Seconds()))(),
      (async () => console.log(await resolveAfter1Second()))(),
    ]);
  };
  
  // Cette fonction ne gère pas les erreurs
  // voir les avertissement ci-après !
  var parallelPromise = function () {
    console.log("==Exécution parallèle avec Promise.then==");
    resolveAfter2Seconds().then((message) => console.log(message));
    resolveAfter1Second().then((message) => console.log(message));
  };
  
  sequentialStart(); // après 2 secondes, "lente" est affichée, après une
  // autre seconde, c'est "rapide" qui est affichée
  
  // on attend que l'étape précédente soit terminée
  setTimeout(concurrentStart, 4000); // 2s avant d'afficher "lente" puis "rapide"
  
  // on attend à nouveau
  setTimeout(concurrentPromise, 7000); // identique à concurrentStart
  
  // on attend à nouveau
  setTimeout(parallel, 10000); // réellement parallele : après 1 seconde,
  // affiche "rapide" et après une autre seconde
  // affiche "lente"
  
  // on attend à nouveau
  setTimeout(parallelPromise, 13000); // identique à parallel