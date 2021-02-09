const user = createNavBar();

let selectedGenre = -1;
function handleGenreDropdownClick(id, name) {
  selectedGenre = id;
  document.getElementById('dropdown-genres-text').innerHTML = name;
}

let selectedPublisher = -1;
function handlePublisherDropdownClick(id, name) {
  selectedPublisher = id;
  document.getElementById('dropdown-publishers-text').innerHTML = name;
}

function cadastrar() {
  if (selectedGenre === -1) {
    alert('Selecione um gênero');
    return;
  }

  if (selectedPublisher === -1) {
    alert('Selecione uma desenvolvedora');
    return;
  }

  if (
    document.getElementById('inputTitle').value === '' ||
    document.getElementById('inputURLPicture').value === ''
  ) {
    alert('Informe todos os dados');
    return;
  }

  fetch(`/api/games`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${user.token}`,
    },
    body: JSON.stringify({
      id_publisher: selectedPublisher,
      id_genre: selectedGenre,
      title: document.getElementById('inputTitle').value,
      description: document.getElementById('inputDescription').value,
      picture: document.getElementById('inputURLPicture').value,
      metacritic_score: document.getElementById('inputMetacriticScore').value,
      release_date: document.getElementById('inputReleaseDate').value,
    }),
  })
    .then(response => {
      if (response.status !== 200) {
        throw new Error();
      }

      alert('Jogo criado com sucesso');
      document.getElementById('inputTitle').value = '';
      document.getElementById('inputDescription').value = '';
      document.getElementById('inputURLPicture').value = '';
      document.getElementById('inputMetacriticScore').value = '';
      document.getElementById('inputReleaseDate').value = '';
      handleGenreDropdownClick(-1, 'Gênero');
      handlePublisherDropdownClick(-1, 'Desenvolvedora');
    })
    .catch(err => {
      alert('Ocorreu um erro', err.message);
    });
}

fetch('/api/genres', {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${user.token}`,
  },
}).then(async data => {
  const genres = await data.json();

  genres.map(genre => {
    const a = document.createElement('a');
    a.className = 'dropdown-item';
    a.href = '#';
    a.onclick = () => handleGenreDropdownClick(genre.id, genre.name);
    a.innerHTML = genre.name;

    document.getElementById('dropdown-genres').appendChild(a);
  });
});

fetch('/api/publishers', {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${user.token}`,
  },
}).then(async data => {
  const publishers = await data.json();

  publishers.map(publisher => {
    const a = document.createElement('a');
    a.className = 'dropdown-item';
    a.href = '#';
    a.onclick = () => handlePublisherDropdownClick(publisher.id, publisher.name);
    a.innerHTML = publisher.name;

    document.getElementById('dropdown-publishers').appendChild(a);
  });
});
