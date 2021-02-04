const userLoggedIn = createNavBar();

async function handleDeleteButton(userToRemove, row) {
  if (!confirm('Tem certeza? Essa ação não pode ser desfeita!')) {
    return;
  }

  const request = await fetch(`/api/users/${userToRemove.id}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${userLoggedIn.token}`,
    },
  });

  if (request.status !== 204) {
    alert('Ocorreu um erro');
    return;
  }

  document.getElementById('table-content').removeChild(row);
}

async function handleAdminButton(userToUpdate, adminButton, removeButton) {
  if (
    userLoggedIn.id === userToUpdate.id &&
    !confirm('Tem certeza? Você deixará de ser um administrador!')
  ) {
    return;
  }

  const request = await fetch(`/api/users/${userToUpdate.id}/admin`, {
    method: 'PATCH',
    body: JSON.stringify({
      admin: !userToUpdate.admin,
    }),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${userLoggedIn.token}`,
    },
  });

  if (request.status !== 200) {
    alert('Ocorreu um erro');
    return;
  }

  if (userLoggedIn.id === userToUpdate.id) {
    user.admin = false;
    window.localStorage.removeItem('user');
    window.localStorage.setItem('user', JSON.stringify(user));
    window.location.href = '/games/search';
  }

  userToUpdate.admin = !userToUpdate.admin;

  removeButton.disabled = userToUpdate.admin;
  adminButton.className = userToUpdate.admin ? 'admin btn btn-danger' : 'admin btn btn-success';
  adminButton.innerHTML = userToUpdate.admin ? 'Remover Acesso' : 'Tornar Admin';
}

fetch('/api/users', {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${userLoggedIn.token}`,
  },
})
  .then(async data => {
    const users = await data.json();
    users.map(user => {
      const row = document.createElement('tr');

      const idElement = document.createElement('th');
      idElement.setAttribute('scope', 'row');
      idElement.innerHTML = user.id;
      row.appendChild(idElement);

      const nameElement = document.createElement('td');
      nameElement.innerHTML = user.name;
      row.appendChild(nameElement);

      const emailElement = document.createElement('td');
      emailElement.innerHTML = user.email;
      row.appendChild(emailElement);

      const avatarElement = document.createElement('td');
      const avatarURL = document.createElement('a');
      avatarURL.href = user.profile_picture;
      avatarURL.target = '_blank';
      avatarURL.innerHTML = 'URL';
      avatarElement.appendChild(avatarURL);
      row.appendChild(avatarElement);

      const adminElement = document.createElement('td');
      const adminButton = document.createElement('button');
      adminButton.className = user.admin ? 'admin btn btn-danger' : 'admin btn btn-success';
      adminButton.innerHTML = user.admin ? 'Remover Acesso' : 'Tornar Admin';
      adminElement.appendChild(adminButton);
      row.appendChild(adminElement);

      const deleteElement = document.createElement('td');
      const deleteButton = document.createElement('button');
      deleteButton.className = 'btn btn-danger';
      deleteButton.innerHTML = 'Deletar';
      deleteButton.onclick = () => handleDeleteButton(user, row);
      if (user.admin) {
        deleteButton.disabled = true;
      }
      deleteElement.appendChild(deleteButton);
      row.appendChild(deleteElement);

      adminButton.onclick = () => handleAdminButton(user, adminButton, deleteButton);

      document.getElementById('table-content').appendChild(row);
    });
  })
  .catch(err => {
    alert('Ocorreu um erro', err);
  });
