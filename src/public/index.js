const token = window.localStorage.getItem('token');
if (token) {
  window.location.href = '/games/search';
}

async function login() {
  const request = await fetch('/api/login', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: document.getElementById('inputEmail').value,
      password: document.getElementById('inputPassword').value,
    }),
  });

  if (request.status !== 200) {
    alert('Erro no login');
  } else {
    const response = await request.json();
    window.localStorage.setItem('token', response.token);
    window.localStorage.setItem('user', JSON.stringify(response.user));

    window.location.href = '/games/search';
  }
}
