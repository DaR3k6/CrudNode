//Modulo que resulve las rutas de las API REST
//ARQUITECTURA RESTFUL
//Recodar: La api rest trabaja con los verbos HTTP
//GET, POST, PUT,DELETE, PATCH ...
//Crearemos los endpoints para cada verbo

const express = require("express");
const cors = require("cors"); //Para evitar restricciones entre llamadas de sitios
const ruta = express.Router(); //Trae el metodo router de express para hacer los endpoints
const url_permitda = "http://127.0.0.1:5500"; //Evitar el error de politcas de cors

//Middlewares requeridos
//Middlewares: Logica de intercambio entre las aplicaciones, traductor de datos entre apliaciones distribuidas
ruta.use(express.json()); //Seraliza la data en JSON
ruta.use(
  cors({
    origin: url_permitda,
  })
);
const conexion = require("./baseDatos");

//Contruimos los endpoint
//Listar todos usamos el GET
ruta.get("/api/users", (require, response) => {
  conexion.query("SELECT * FROM users", (error, respuesta) => {
    if (error) {
      throw error;
    } else {
      response.send(respuesta);
    }
  });
});

//....

module.exports = ruta;
