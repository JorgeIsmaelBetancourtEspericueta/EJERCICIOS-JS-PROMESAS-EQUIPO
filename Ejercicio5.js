// Ejercicio 5: Autenticación de Usuario


//Creamos la funcion para autenticar usuario
function usernameAuthentication(username, password){
    return new Promise((resolve, rejects)=>{
        setTimeout(()=>{
            if(username === "admin" && password ==="1234"){
                resolve({username, role: "Administrator", message: "Login Succesfull"}); //If the user is "admin" and the password is "1234", the promise is resolved with this object
            }else{
                rejects({error: "Incorrect credentials, code: 401"}); //If the data is incorrect, the promise is rejected with this object
            }
        },2000)
    });
}

//Prueba cuando el usuario es correcto
usernameAuthentication("admin", "1234")
.then((message)=> console.log(message))
.catch((error)=> console.log(error));

//Prueba cuando el usuario es incorrecto
usernameAuthentication("user", "1234")
.then((message)=> console.log(message))
.catch((error)=> console.log(error));
