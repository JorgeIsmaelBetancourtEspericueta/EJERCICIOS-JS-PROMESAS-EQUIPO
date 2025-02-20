// Simulación de un Pago en Línea
// Crea una función procesarPago(monto) que devuelva una promesa.
// Si el monto es mayor a 0, la promesa se resuelve con "Pago exitoso de $monto".
// Si el monto es 0 o menor, la promesa se rechaza con "Error: Monto inválido".

function processpayment(monto){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            const exit = monto > 0
            if(exit){
                resolve("Pago exitoso de: $" + monto)
            }else{
                reject("Error: Monto invalido")
            }
        },2000);
    });
}
processpayment(500)
    .then((message) => console.log(message))
    .catch((error) => console.log(error))

// Estuvo facil de resolver, me base en el ejemplo de promesas que se realizo en clase 
