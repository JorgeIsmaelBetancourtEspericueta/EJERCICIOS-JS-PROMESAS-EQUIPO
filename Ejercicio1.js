//Ejercicio 1: Simulación de Descarga de Archivo

function downloadFile(size) {
  return new Promise((resolve, reject) => {
    //Esperamos 2 segundos
    setTimeout(() => {
      //Verificamos que el archivo sea menor a 500MB
      if (size <= 500) {
        resolve("Download completed");
      } else {
        reject("The file is too large");
      }
    }, 2000);
  });
}

//Probamos cuando el archivo pesa 500MB
downloadFile(500)
  .then((message) => console.log(message))
  .catch((error) => console.log(error));

//Probamos cuando el archivo es mayor a 500MB
downloadFile(600)
  .then((message) => console.log(message))
  .catch((error) => console.log(error));
