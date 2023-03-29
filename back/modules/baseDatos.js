//Modulo que se encarga de conectar la BD
//Instanciamos el modulo MYSQL
const mysql = require("mysql");
//Creamos la conexion
const conexion = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "crud",
});

//Nos conectamos a la BD
conexion.connect((error) => {
  if (error) {
    throw "Existe un error en la cadena de conexion";
  } else {
    console.log("Conexion Exitosa!");
  }
});

//Exporta este modulo para usarlo en otros modulos principio SRP Single-responsibility principle
module.exports = conexion;
