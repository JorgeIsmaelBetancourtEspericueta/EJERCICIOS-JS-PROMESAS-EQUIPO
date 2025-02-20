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

function checkWeather(city) {
    return new Promise((resolve, reject) => {
        if(db[city] !== undefined) {
            resolve("{ " + city + ", " + db[city].temperature + ", " + db[city].condition + " }");
        }
        else {
            reject('{ error: "Ciudad no encontrada", codigo: 404 }');
        }
    })
}

checkWeather("Tepic")
    .then( (message => console.log(message)))
    .catch( (error) => console.log(error)); 

    
checkWeather("Campeche")
.then( (message => console.log(message)))
.catch( (error) => console.log(error)); 
