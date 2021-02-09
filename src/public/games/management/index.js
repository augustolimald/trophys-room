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
  window.location.href = `/games/update?id_game=${gameToUpdate.id}`;
}

function handleAddButton() {
  window.location.href = '/games/new';
}

document.getElementById('btnAdd').onclick = () => handleAddButton();

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
