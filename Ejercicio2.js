//Ejercicio 2: Validación de Edad para una Compra


//Creamos la funcion para verificar que la edad es mayo o igual a 18 años
function verifyAge(age){
    return new Promise((resolve, rejects)=>{
        setTimeout(()=>{
            if(age >= 18){
                resolve("Purchase allowed");  
            }else{
                rejects("You must be of legal age to purchase this product");
            }
        },2000)
    });
}

//Prueba cuando la edad es valida
verifyAge(24)
.then((message)=> console.log(message))
.catch((error)=> console.log(error));

//Prueba cuando la edad es invalida
verifyAge(17)
.then((message)=> console.log(message))
.catch((error)=> console.log(error));
