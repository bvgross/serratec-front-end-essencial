function cadastrarV1(e) {
  e.preventDefault();
  var emailInput = document.getElementById("emailUser").value;
  var senhaInput = document.getElementById("senhaUser").value;
  var nomeInput = document.getElementById("nomeUser").value;
  var urlBase = `https://66f4ad8277b5e889709a277e.mockapi.io/api/v1/users`;

  var userData = {
    name: nomeInput,
    email: emailInput,
    password: senhaInput,
  };

  fetch(urlBase, {
    method: "POST",
    headers: {
      "Content-Type": "application/JSON",
    },
    body: JSON.stringify(userData),
  })
    .then(() => {
      alert("Usuário cadastrado com sucesso!!");
      location.reload();
    })
    .catch(() => {
      alert("Erro ao tentar cadastrar o usuário!!");
    });
}

async function cadastrar(e) {
  e.preventDefault();
  var emailInput = document.getElementById("emailUser").value;
  var senhaInput = document.getElementById("senhaUser").value;
  var nomeInput = document.getElementById("nomeUser").value;
  var urlBase = `https://66f4ad8277b5e889709a277e.mockapi.io/api/v1/users`;

  var usuario = {
    name: nomeInput,
    email: emailInput,
    password: senhaInput,
  };

  try {
    var response = await fetch(urlBase, {
      method: "POST",
      headers: {
        "Content-Type": "application/JSON",
      },
      body: JSON.stringify(usuario),
    });

    if (response.ok) {
      alert("Usuario cadastrado com sucesso!!!");
      location.reload();
    } else {
      alert("Erro interno, tente novamente mais tarde!!!");
    }
  } catch (error) {
    alert("Erro ao tentar cadastrar o usuário!!");
  }
}

