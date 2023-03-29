//Consumo de una api rest creada en NODE JS

const urlApi = "http://localhost:3300/api/users";

fetch(urlApi)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    for (let i = 0; i < data.length; i++) {
      document.write(
        data[i].id +
          "  " +
          data[i].name +
          "  " +
          data[i].lastName +
          "  " +
          data[i].phone +
          "<br>"
      );
    }
  });
