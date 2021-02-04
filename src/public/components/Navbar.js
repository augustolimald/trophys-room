function quit(page) {
  if (!confirm('Você deseja mesmo sair?')) {
    return;
  }

  const token = window.localStorage.getItem('token');

  fetch('/api/logout', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  window.localStorage.clear();
  window.location.href = '../..';
}

function createNavBar() {
  const token = window.localStorage.getItem('token');

  if (!token) {
    alert('Você precisa estar autenticado');
    window.location.href = '../..';
  }

  const user = JSON.parse(window.localStorage.getItem('user'));
  user.token = token;

  const nav = document.createElement('nav');
  nav.className = 'navbar navbar-expand-lg navbar-light bg-light';

  const imgUrl = document.createElement('a');
  imgUrl.className = 'navbar-brand';
  imgUrl.href = '/users/update';
  imgUrl.style = 'margin-left: 20px';

  const img = document.createElement('img');
  img.className = 'd-inline-block align-top';
  img.src = user.profile_picture;
  img.width = 30;
  img.height = 30;
  imgUrl.appendChild(img);

  const name = document.createElement('span');
  name.innerHTML = `&nbsp; ${user.name}`;
  imgUrl.appendChild(name);

  nav.appendChild(imgUrl);

  const mobileBtn = document.createElement('button');
  mobileBtn.className = 'navbar-toggler';
  mobileBtn.type = 'button';
  mobileBtn.setAttribute('data-toggle', 'collapse');
  mobileBtn.setAttribute('data-target', '#navbarSupportedContent');
  mobileBtn.setAttribute('aria-controls', 'navbarSupportedContent');
  mobileBtn.setAttribute('aria-expanded', 'false');
  mobileBtn.setAttribute('aria-label', 'Toggle navigation');
  const mobileSpan = document.createElement('span');
  mobileSpan.className = 'navbar-toggler-icon';
  mobileBtn.appendChild(mobileSpan);
  nav.appendChild(mobileBtn);

  const optionsCollapse = document.createElement('div');
  optionsCollapse.class = 'collapse navbar-collapse';
  optionsCollapse.id = 'navbarSupportedContent';

  const options = document.createElement('ul');
  options.className = 'navbar-nav mr-auto';

  const quitOption = document.createElement('li');
  quitOption.className = 'nav-item';
  const quitUrl = document.createElement('a');
  quitUrl.className = 'nav-link';
  quitUrl.href = '#';
  quitUrl.innerHTML = 'Sair';
  quitUrl.setAttribute('onclick', 'quit(); return false;');
  quitOption.appendChild(quitUrl);
  options.appendChild(quitOption);

  const gameOption = document.createElement('li');
  gameOption.className = 'nav-item';
  const gameUrl = document.createElement('a');
  gameUrl.className = 'nav-link active';
  gameUrl.href = '/games/search';
  gameUrl.innerHTML = 'Listar Games';
  gameOption.appendChild(gameUrl);
  options.appendChild(gameOption);

  const gameAdminOption = document.createElement('li');
  gameAdminOption.className = 'nav-item ';
  const gameAdminUrl = document.createElement('a');
  gameAdminUrl.className = `nav-link ${user.admin ? 'active' : 'disabled'}`;
  gameAdminUrl.href = '/games/management';
  gameAdminUrl.innerHTML = 'Gerenciar Games';
  gameAdminOption.appendChild(gameAdminUrl);
  options.appendChild(gameAdminOption);

  const userAdminOption = document.createElement('li');
  userAdminOption.className = 'nav-item';
  const userAdminUrl = document.createElement('a');
  userAdminUrl.className = `nav-link ${user.admin ? 'active' : 'disabled'}`;
  userAdminUrl.href = '/users/management';
  userAdminUrl.innerHTML = 'Gerenciar Usuários';
  userAdminOption.appendChild(userAdminUrl);
  options.appendChild(userAdminOption);

  optionsCollapse.appendChild(options);
  nav.appendChild(optionsCollapse);

  document.getElementById('navbar').appendChild(nav);

  return user;
}
