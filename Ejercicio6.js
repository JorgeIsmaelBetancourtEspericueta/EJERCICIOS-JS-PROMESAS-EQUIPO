//Ejercicio 6: Verificación de Saldo Bancario

let totalMoney = 5000;

function checkMoney(account, amount) {
  return new Promise((resolve, reject) => {
    //Esperamos 2 segundos
    setTimeout(() => {
      //Verificamos que el retiro sea menor a nuestro saldo
      if (amount <= totalMoney) {
        totalMoney = totalMoney - amount;
        resolve(`${account}, New total: ${totalMoney}, "Approved transaction"`);
      } else {
        reject(
          `error: "No enough money", Available balance ${totalMoney}, code: 402`
        );
      }
    }, 2000);
  });
}

//Promesa cuando el retiro es menor a la cantidad total
checkMoney("415678", "2000")
  .then((message) => console.log(message))
  .catch((error) => console.log(error));

//Promesa cuando el retiro es mayor al saldo
checkMoney("415678", "6000")
  .then((message) => console.log(message))
  .catch((error) => console.log(error));
