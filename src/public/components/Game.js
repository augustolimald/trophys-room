function addHeartIcon(element, isWished) {
  if (isWished) {
    element.setAttribute('src', '/assets/bookmark-heart.svg');
  } else {
    element.setAttribute('src', '/assets/bookmark-heart-fill.svg');
  }
}

function handleWishButton(id, element, icon) {
  if (element.value === 'true') {
    fetch(`/api/users/${user.id}/wish/${id}`, {
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

        addHeartIcon(icon, element.value);
        element.value = !element.value;
      })
      .catch(err => {
        alert('Ocorreu um erro', err);
      });
  } else {
    fetch(`/api/users/${user.id}/wish`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify({
        id_game: id,
      }),
    })
      .then(response => {
        if (response.status !== 200) {
          throw new Error();
        }

        addHeartIcon(icon, !element.value);
        element.value = !element.value;
      })
      .catch(err => {
        alert('Ocorreu um erro', err);
      });
  }
}

function handlePlayedButton(id, element) {
  if (element.value === 'true') {
    const score = parseInt(prompt('Informe uma nota de 0 a 100'));
    if (isNaN(score) || score < 0 || score > 100) {
      alert('Você informou um valor inválido');
      return;
    }

    const comment = prompt('Faça um comentário sobre o jogo');

    fetch(`/api/games/${id}/review`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify({
        score,
        comment,
      }),
    })
      .then(response => {
        if (response.status !== 200) {
          throw new Error();
        }

        element.innerHTML = 'Analisado';
        element.disabled = true;
      })
      .catch(err => {
        alert('Ocorreu um erro', err);
      });
  } else {
    fetch(`/api/users/${user.id}/played`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify({
        id_game: id,
      }),
    })
      .then(response => {
        if (response.status !== 200) {
          throw new Error();
        }

        element.value = 'true';
        element.innerHTML = 'Analisar';
      })
      .catch(err => {
        alert('Ocorreu um erro', err);
      });
  }
}

function createGame(game) {
  const div = document.createElement('div');
  div.className = 'col-sm-3';

  const card = document.createElement('div');
  card.id = `game:${game.id}`;
  card.className = 'card';
  card.style = 'width: 20rem;';

  const img = document.createElement('img');
  img.className = 'card-img-top';
  img.width = '320';
  img.height = '180';
  img.src = game.picture;
  img.alt = game.title;
  card.appendChild(img);

  const body = document.createElement('div');
  body.className = 'card-body text-center';

  const title = document.createElement('h5');
  title.className = 'card-title crop-title-text';
  title.innerHTML = game.title;
  body.appendChild(title);

  const description = document.createElement('p');
  description.className = 'card-text crop-description-text';
  description.innerHTML = game.description;
  body.appendChild(description);

  const parameters = document.createElement('ul');
  parameters.className = 'list-group list-group-flush';

  const genre = document.createElement('li');
  genre.className = 'list-group-item';
  genre.innerHTML = `<strong>Gênero: </strong> ${game.genre.name}`;
  parameters.appendChild(genre);

  const publisher = document.createElement('li');
  publisher.className = 'list-group-item crop-publisher-text';
  publisher.innerHTML = `<strong>Desenvolvedora: </strong> ${game.publisher.name}`;
  parameters.appendChild(publisher);

  const metacritic_score = document.createElement('li');
  metacritic_score.className = 'list-group-item';
  metacritic_score.innerHTML = `<strong>Nota Metacritic: </strong> ${game.metacritic_score}`;
  parameters.appendChild(metacritic_score);

  const average_score = document.createElement('li');
  average_score.className = 'list-group-item';
  average_score.innerHTML = `<strong>Nota Trophy's Room: </strong> ${game.average_score}`;
  parameters.appendChild(average_score);

  const release_date = document.createElement('li');
  release_date.className = 'list-group-item';
  release_date.innerHTML = `<strong>Data Lançamento: </strong> ${new Date(
    game.release_date,
  ).toLocaleDateString()}`;
  parameters.appendChild(release_date);

  body.appendChild(parameters);

  body.appendChild(document.createElement('br'));

  const btnPlayed = document.createElement('button');
  btnPlayed.type = 'button';
  btnPlayed.value = game.played;
  btnPlayed.innerHTML = game.played ? (game.reviewed ? 'Analisado' : 'Analisar') : 'Joguei';
  btnPlayed.disabled = game.reviewed;
  btnPlayed.className = 'btn btn-primary btn-sm mr-1 mb-2';
  btnPlayed.onclick = () => handlePlayedButton(game.id, btnPlayed);

  body.appendChild(btnPlayed);

  const btnWish = document.createElement('button');
  btnWish.title = 'Lista de Desejos';
  btnWish.type = 'button';
  btnWish.value = game.wishlist;
  btnWish.className = 'btn btn-danger btn-sm px-3 mb-2 material-tooltip-main';
  btnWish.setAttribute('data-toggle', 'tooltip');
  btnWish.setAttribute('data-placement', 'top');

  const space = document.createElement('span');
  space.innerHTML = '&nbsp;';
  body.appendChild(space);

  const iconWish = document.createElement('img');
  iconWish.setAttribute('width', 16);
  iconWish.setAttribute('height', 16);
  addHeartIcon(iconWish, !game.wishlist);
  btnWish.appendChild(iconWish);

  btnWish.onclick = () => handleWishButton(game.id, btnWish, iconWish);

  body.appendChild(btnWish);

  card.appendChild(body);
  div.appendChild(card);

  document.getElementById('games').appendChild(div);
}
