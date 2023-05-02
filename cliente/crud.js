const urlApi = "http://localhost:3300/api/users/"; //Api a consumir
const tblDatos = document.querySelector("#tblDatos");
const nombre = document.querySelector("#name");
const apelllido = document.querySelector("#lastName");
const telefono = document.querySelector("#phone");
const frmNuevo = document.querySelector("#frmNuevo");

//Listar
fetch(urlApi)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
      let fila = ` <tr> <td>${data[i].id} </td>
      <td>${data[i].name} </td>
      <td>${data[i].lastName} </td>
      <td>${data[i].phone} </td>
      <td> <button type="button" class="btn btn-success" id="btnEditar">Editar</button></td>
      <td> <button type="button" class="btn btn-danger" id="btnBorrar">Borrar</button></td>
      </tr>`;
      tblDatos.innerHTML += fila;
    }

    console.log(data);
  });

frmNuevo.addEventListener("submit", (e) => {
  e.preventDefault();

  //Capturamos data de los formularios
  fetch(urlApi, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: nombre.value,
      lastName: apelllido.value,
      phone: telefono.value,
    }),
  })
    .then((res) => {
      return res.json();
    })
    .then(() => {
      location.reload();
    });
});

//Crear metodo ON para seleccionar por fila en la tabla usando el DOM
//Metodo on == necesario para seleccionar la fila
//Es para manipular el document pues los botones borrar y editar son en tiempo real

const on = (element, event, selector, handler) => {
  element.addEventListener(event, (e) => {
    if (e.target.closest(selector)) {
      handler(e);
    }
  });
};
//==========================================

//Borrar
on(document, "click", "#btnBorrar", (e) => {
  let fila = e.target.parentNode.parentNode;
  const id = fila.firstElementChild.innerHTML; //id necesario para borrar
  //const id = fila.children[0].innerHTML
  //console.log(id);

  if (confirm("Desea borrar?")) {
    fetch(urlApi + id, {
      method: "DELETE",
    }).then((res) => {
      return res.json();
    });
    location.reload();
  }
});

//Actualizar
