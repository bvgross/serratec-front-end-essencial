function deleteUserV1(e) {
  e.preventDefault();
  var idUsuario = document.getElementById("deleteUserId").value;
  var urlBase = `https://66f4ad8277b5e889709a277e.mockapi.io/api/v1/users/${idUsuario}`;

  fetch(urlBase, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: idUsuario,
    }),
  })
    .then(() => {
      alert("Usuario deletado com sucesso!!");
    })
    .catch(() => {
      alert("Erro ao deletar usuário!!");
    });
}

async function deleteUser(e) {
  e.preventDefault();
  var idUsuario = document.getElementById("deleteUserId").value;
  var urlBase = `https://66f4ad8277b5e889709a277e.mockapi.io/api/v1/users/${idUsuario}`;

  try {
    var response = await fetch(urlBase, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      alert("Usuário deletado com sucesso!!!");
      location.reload();
    } else {
      alert("Erro interno, tente novamente mais tarde.");
    }
  } catch (error) {
    //Erro da Api
    alert("Erro ao deletar usuário!!");
  }
}
