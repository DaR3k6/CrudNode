//Las rutas para resolver cada verbo de http
//Modulo que resulve las rutas de las API REST
//ARQUITECTURA RESTFUL
//Recodar: La api rest trabaja con los verbos HTTP
//GET, POST, PUT,DELETE, PATCH ...
//Crearemos los endpoints para cada verbo

//Modulos requeridos para el proyecto

const express = require("express");
const cors = require("cors"); //Para evitar restricciones entre llamadas de sitios
const ruta = express.Router(); //Trae el metodo router de express para hacer los endpoints
const conex = require("./bdatos.js");

//Construimos la capa intermedia de la aplicacion MIDDLEWARE
ruta.use(express.json()); //Serializa la data en JSON
ruta.use(cors()); //Permite el acceso de otras direciones IP distintas a mi servicio
ruta.options("*", cors()); //Configura las IP admitidas por cors, * significa que las acepta todas

//Codificamos los verbos HTTP (CRUD tipico)

//Verbo GET LISTAR
ruta.get("/api/users", (req, res) => {
  conex.query("SELECT * FROM users", (error, respuesta) => {
    if (error) {
      throw error;
    } else {
      res.send(respuesta);
    }
  });
});

//Verbo POST INSERTAR
ruta.post("/api/users", (req, res) => {
  let data = {
    name: req.body.name,
    lastName: req.body.lastName,
    phone: req.body.phone,
  };
  conex.query("INSERT INTO users SET ?", data, (error, respuesta) => {
    if (error) {
      console.log(error);
    } else {
      res.status(201).send(respuesta);
    }
  });
});

//Verbo PUT ACUTALIZAR
ruta.put("/api/users/:id", (req, res) => {
  let id = req.params.id;
  let data = {
    name: req.body.name,
    lastName: req.body.lastName,
    phone: req.body.phone,
  };
  conex.query(
    "UPDATE users SET ? WHERE id = ?",
    [data, id],
    (error, respuesta) => {
      if (error) {
        console.log(error);
      } else {
        res.status(201).send(respuesta);
      }
    }
  );
});

//Verbo DELETE ELIMINAR
ruta.delete("/api/users/:id", (req, res) => {
  let id = req.params.id;
  conex.query("DELETE FROM users WHERE id = ?", id, (error, respuesta) => {
    if (error) {
      console.log(error);
    } else {
      res.status(201).send(respuesta);
    }
  });
});

module.exports = ruta;
