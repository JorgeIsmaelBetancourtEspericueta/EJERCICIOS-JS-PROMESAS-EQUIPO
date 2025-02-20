let inventory = { "laptop": 5, "mouse": 10, "teclado": 0 }; 

function verifyStock(product, amount) {
    return new Promise((resolve, reject) => {
        if(inventory[product] !== undefined) {
            if(inventory[product] >= amount) {
                resolve("Stock disponible, procediendo con la compra");
            } 
            else {
                reject("Stock insuficiente");
            }
        }
        else {
            reject("Producto inexistente en inventario");
        }
    })
}

verifyStock("celular", 2)
    .then( (message => console.log(message)))
    .catch( (error) => console.log(error)); 
