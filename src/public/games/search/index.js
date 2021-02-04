const user = createNavBar();

function loadGames() {
  fetch('/api/games', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${user.token}`,
    },
  })
    .then(async data => {
      const games = await data.json();
      games.map(game => createGame(game));
    })
    .catch(err => {
      alert('Ocorreu um erro', err.message);
    });
}

let selectedGenre = 0;
function handleGenreDropdownClick(id) {
  selectedGenre = id;
  document.getElementById('games').innerHTML = '';
  loadGames();
}

let selectedPublisher = 0;
function handlePublisherDropdownClick(id) {
  selectedPublisher = id;
  document.getElementById('games').innerHTML = '';
  loadGames();
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
    a.onclick = () => handleGenreDropdownClick(genre.id);
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
    a.onclick = () => handlePublisherDropdownClick(publisher.id);
    a.innerHTML = publisher.name;

    document.getElementById('dropdown-publishers').appendChild(a);
  });
});

loadGames();
