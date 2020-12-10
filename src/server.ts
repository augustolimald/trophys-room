import Env from './env';
import app from './app';
import './database';

const port = Env.get('PORT', 8080);
const url = Env.get('URL', `http://localhost:${port}`);

app.listen(port, () => {
  console.log(`Server running on ${url}`);
});
