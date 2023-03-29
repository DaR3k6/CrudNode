//Puerta de entrada de la aplicacion, usamos el principio SRP
//Single-responsibility principle

//Instanciamos los modulos requeridos
const express = require("express");

const app = express(); //Creamos nuestra aplicacion llamando el metodo constructor de express
app.use("/", require("./modules/rutas")); //Redirigimos al modulo rutas donde se resolveran las rutas
app.listen("3300", () => {
  console.log("Aplicacion Ejecutandose en : http://localhost:3300");
});
