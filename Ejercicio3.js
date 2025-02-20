// Crea un objeto de inventario con el nombre del producto y la cantidad en almacén
let inventory = { "laptop": 5, "mouse": 10, "teclado": 0 }; 

// Crea una función que recibe el producto y la cantidad como parámetros
function verifyStock(product, amount) {
    // Retorna una promesa
    return new Promise((resolve, reject) => {
        // Se accede al atributo que apunta 'product' y verifica que exista
        if(inventory[product] !== undefined) {
            // Verifica si la cantidad en inventario es mayor a la cantidad solicitada
            if(inventory[product] >= amount) {
                // Procede a la compra cuando hay inventario suficiente
                resolve("Stock available, proceed with the purchase");
            } 
            else {
                // Rechaza la compra cuando no existe inventario suficiente
                reject("Insufficient stock");
            }
        }
        else {
            // Rechaza la compra cuando el producto no existe en el inventario
            reject("Non-existent product in inventory");
        }
    })
}

//Cuando sí existe el producto y sí hay en stock
verifyStock("laptop", 4)
    .then( (message => console.log(message)))
    .catch( (error) => console.log(error)); 

    
//Producto inexsistente
verifyStock("celular", 2)
    .then( (message => console.log(message)))
    .catch( (error) => console.log(error)); 

//Cuando sí existe el producto pero no hay stock
verifyStock("teclado", 6)
    .then( (message => console.log(message)))
    .catch( (error) => console.log(error)); 




