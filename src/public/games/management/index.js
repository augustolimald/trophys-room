const userLoggedIn = createNavBar();

async function handleDeleteButton(game, row) {
  if (!confirm('Tem certeza? Essa ação não pode ser desfeita!')) {
    return;
  }

  const request = await fetch(`/api/games/${game.id}`, {
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

async function handleUpdateButton(gameToUpdate) {
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

fetch('/api/games', {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${userLoggedIn.token}`,
  },
})
  .then(async data => {
    const games = await data.json();
    games.map(game => {
      const row = document.createElement('tr');

      const idElement = document.createElement('th');
      idElement.setAttribute('scope', 'row');
      idElement.innerHTML = game.id;
      row.appendChild(idElement);

      const titleElement = document.createElement('td');
      titleElement.innerHTML = game.title;
      row.appendChild(titleElement);

      const genreElement = document.createElement('td');
      genreElement.innerHTML = game.genre.name;
      row.appendChild(genreElement);

      const publisherElement = document.createElement('td');
      publisherElement.innerHTML = game.publisher.name;
      row.appendChild(publisherElement);

      const descriptionElement = document.createElement('td');
      descriptionElement.className = 'description';
      descriptionElement.innerHTML = game.description;
      row.appendChild(descriptionElement);

      const urlElement = document.createElement('td');
      const urlLink = document.createElement('a');
      urlLink.href = game.picture;
      urlLink.target = '_blank';
      urlLink.innerHTML = 'URL';
      urlElement.appendChild(urlLink);
      row.appendChild(urlElement);

      const updateElement = document.createElement('td');
      const updateButton = document.createElement('button');
      updateButton.className = 'btn btn-success';
      updateButton.innerHTML = 'Alterar';
      updateElement.appendChild(updateButton);
      updateButton.onclick = () => handleUpdateButton(game);
      row.appendChild(updateElement);

      const deleteElement = document.createElement('td');
      const deleteButton = document.createElement('button');
      deleteButton.className = 'btn btn-danger';
      deleteButton.innerHTML = 'Deletar';
      deleteButton.onclick = () => handleDeleteButton(game, row);
      deleteElement.appendChild(deleteButton);
      row.appendChild(deleteElement);

      document.getElementById('table-content').appendChild(row);
    });
  })
  .catch(err => {
    console.log(err);
    alert('Ocorreu um erro', err);
  });
