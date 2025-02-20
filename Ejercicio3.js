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
                resolve("Stock disponible, procediendo con la compra");
            } 
            else {
                // Rechaza la compra cuando no existe inventario suficiente
                reject("Stock insuficiente");
            }
        }
        else {
            // Rechaza la compra cuando el producto no existe en el inventario
            reject("Producto inexistente en inventario");
        }
    })
}

// Llama la función pasando un producto y la cantidad solicitada como parámetros
verifyStock("laptop", 2)
    .then( (message => console.log(message)))
    .catch( (error) => console.log(error)); 

// Llama la función pasando un producto y la cantidad solicitada como parámetros
verifyStock("celular", 2)
    .then( (message => console.log(message)))
    .catch( (error) => console.log(error)); 
