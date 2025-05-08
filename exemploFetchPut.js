function editarV1(e) {
  e.preventDefault();
  var idUsuario = document.getElementById("userId").value;
  var emailUsuario = document.getElementById("novoEmail").value;
  var urlBase = `https://66f4ad8277b5e889709a277e.mockapi.io/api/v1/users/${idUsuario}`;

  if (!idUsuario || !emailUsuario) {
    alert("Preencha os campos necessários!!!");
    return;
  }

  fetch(urlBase, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: emailUsuario }),
  })
    .then(() => {
      alert(`Email do usuário de id ${idUsuario} alterado com sucesso!!`);
    })
    .catch(() => {
      alert(`Erro ao editar o id: ${idUsuario}`);
    });
}

async function editar(e) {
  e.preventDefault();
  var idUsuario = document.getElementById("userId").value;
  var emailUsuario = document.getElementById("novoEmail").value;
  var urlBase = `https://66f4ad8277b5e889709a277e.mockapi.io/api/v1/users/${idUsuario}`;

  if (!idUsuario || !emailUsuario) {
    alert("Preencha os campos necessários!!!");
    return;
  }

  try {
    var response = await fetch(urlBase, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: emailUsuario }),
    });

    if (response.ok) {
      alert(`Email do usuário de id ${idUsuario} alterado com sucesso!!`);
      location.reload();
    } else {
      alert("Erro interno, tente novamente mais tarde");
    }
  } catch (error) {
    alert(`Erro ao editar o id: ${idUsuario}`);
  }
}
