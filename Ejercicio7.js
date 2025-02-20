// Crea la base de datos de clima por ciudad
let db = {
    Guadalajara : { 
        temperature: 25,
        condition: true
    }, 
    Tepic: {
        temperature: 28,
        condition: true
    },
    Mazatlan: {
        temperature: 40,
        condition: true
    }
}; 

// Crea una función para checar el clima de una ciudad recibiendo el nombre de la ciudad como parámetro
function checkWeather(city) {
    // Retorna una promesa
    return new Promise((resolve, reject) => {
        // Verifica si la ciudad existe en la base de datos
        if(db[city] !== undefined) {
            // Devuelve la información de la ciudad, temperatura y condición
            resolve("{ " + city + ", " + db[city].temperature + ", " + db[city].condition + " }");
        }
        else {
            // Rechaza la solicitud y devuelve el error
            reject('{ error: "City not found", code: 404 }');
        }
    })
}

// Llama a la función enviando el nombre de una ciudad como parámetro
checkWeather("Tepic")
    .then( (message => console.log(message)))
    .catch( (error) => console.log(error)); 

// Llama a la función enviando el nombre de una ciudad como parámetro
checkWeather("Campeche")
.then( (message => console.log(message)))
.catch( (error) => console.log(error)); 
