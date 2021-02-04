async function cadastrar() {
  const formData = new FormData();
  formData.append('name', document.getElementById('inputName').value);
  formData.append('email', document.getElementById('inputEmail').value);
  formData.append('password', document.getElementById('inputPassword').value);
  formData.append('image', document.getElementById('inputFile').files[0]);

  try {
    const request = await fetch('/api/users', {
      method: 'POST',
      body: formData,
    });

    if (request.status !== 200) {
      throw new Error();
    }

    window.location.href = '/';
  } catch (err) {
    alert('Ocorreu um erro', err.message);
  }
}
