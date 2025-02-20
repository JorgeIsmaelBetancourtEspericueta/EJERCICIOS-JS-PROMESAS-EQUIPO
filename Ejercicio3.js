let inventory = { "laptop": 5, "mouse": 10, "teclado": 0 }; 

function verifyStock(product, amount) {
    return new Promise((resolve, reject) => {
        if(inventory[product] !== undefined) {
            if(inventory[product] >= amount) {
                resolve("Stock available, proceed with the purchase");
            } 
            else {
                reject("Insufficient stock");
            }
        }
        else {
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




