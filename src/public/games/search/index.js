const user = createNavBar();

let selectedGenre = -1;
let selectedPublisher = -1;
let selectedRelation = 'all';

function loadGames() {
  fetch(
    `/api/games?id_publisher=${selectedPublisher === -1 ? '' : selectedPublisher}&id_genre=${
      selectedGenre === -1 ? '' : selectedGenre
    }&${selectedRelation}=true`,
    {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user.token}`,
      },
    },
  )
    .then(async data => {
      const games = await data.json();
      games.map(game => createGame(game));
    })
    .catch(err => {
      alert('Ocorreu um erro', err.message);
    });
}

function handleGenreDropdownClick(id, name) {
  selectedGenre = id;
  document.getElementById('dropdown-genres-text').innerHTML = name;
  document.getElementById('games').innerHTML = '';
  loadGames();
}

function handlePublisherDropdownClick(id, name) {
  selectedPublisher = id;
  document.getElementById('dropdown-publishers-text').innerHTML = name;
  document.getElementById('games').innerHTML = '';
  loadGames();
}

function handleRelationDropdownClick(description, name) {
  selectedRelation = name;
  document.getElementById('dropdown-relations-text').innerHTML = description;
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

loadGames();
