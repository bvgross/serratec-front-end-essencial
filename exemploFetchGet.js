// fetch(`${urlBase}/users`)
//   .then((aguardandoDados) => aguardandoDados.json())
//   .then((trabalhandoComDadosCarregados) => {
//     console.log(trabalhandoComDadosCarregados);
//     var listaUsuarios = document.getElementById("listUser");

//     if (trabalhandoComDadosCarregados.length > 0) {
//       trabalhandoComDadosCarregados.forEach((usuario) => {
//         const random = Math.floor(Math.random() * 1000);
//         const avatarUrl = `https://picsum.photos/100?random=${random}`;

//         listaUsuarios.innerHTML += `
//         <div class="mycard">
//           <img src="${avatarUrl}" alt="foto de perfil do usuario ${
//           usuario.name
//         }">
//           <h2 class="title">Nome: ${
//             usuario.name ? usuario.name : "Desconhecido"
//           }</h2>
//           <p class="title">Email: ${
//             usuario.email ? usuario.email : "Email Desconhecido"
//           }</p>
//         </div>
//         `;
//       });
//     } else {
//       listaUsuarios.innerHTML = `<span> lista não encontrada </span>`;
//     }
//   })
//   .catch(() => {
//     alert("Erro ao tentar buscar os usuários!!");
//   });

async function carregarDadosApi() {
  var url = `${urlBase}/users`;
  var listaUsuarios = document.getElementById("listUser");

  listaUsuarios.innerHTML = `<p>Carregando Dados...</p>`;

  try {
    var response = await fetch(url);
    var dados = await response.json();

    setTimeout(() => {
      listaUsuarios.innerHTML = "";
      if (dados.length > 0) {
        dados.forEach((usuario) => {
          const random = Math.floor(Math.random() * 1000);
          const avatarUrl = `https://picsum.photos/100?random=${random}`;

          listaUsuarios.innerHTML += `
          <div class="mycard">
            <img src="${avatarUrl}" alt="foto de perfil do usuario ${usuario.name
            }">
            <h2 class="title">Nome: ${usuario.name ? usuario.name : "Desconhecido"
            }</h2>
            <p class="title">Email: ${usuario.email ? usuario.email : "Email Desconhecido"
            }</p>
          </div>`;
        });
      } else {
        listaUsuarios.innerHTML = `<span> lista não encontrada </span>`;
      }
    }, 1500);
  } catch (error) {
    listaUsuarios.innerHTML = `<p>Erro ao carregar os dados</p>`;
  }
}
carregarDadosApi();
