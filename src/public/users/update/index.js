const user = createNavBar();

document.getElementById('inputName').value = user.name;
document.getElementById('inputEmail').value = user.email;

function atualizar() {
  fetch(`/api/users/${user.id}`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${user.token}`,
    },
    body: JSON.stringify({
      name: document.getElementById('inputName').value,
      email: document.getElementById('inputEmail').value,
      password: document.getElementById('inputPassword').value,
    }),
  })
    .then(response => {
      if (response.status !== 200) {
        throw new Error();
      }

      alert('Usuário alterado');
      quit(false);
    })
    .catch(err => {
      alert('Ocorreu um erro', err.message);
    });
}

function excluir() {
  if (!confirm('Você realmente deseja fazer isso?')) {
    return;
  }

  fetch(`/api/users/${user.id}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${user.token}`,
    },
  })
    .then(response => {
      if (response.status !== 204) {
        throw new Error();
      }

      alert('Usuário removido');
      quit(false);
    })
    .catch(err => {
      alert('Ocorreu um erro', err.message);
    });
}
