import Env from './env';
import app from './app';
import database from './database';

const port = Env.get('PORT', 8080);
const url = Env.get('URL', `http://localhost:${port}`);

database
  .connect()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server running on ${url}`);
    });
  })
  .catch(() => {
    console.log('Server disconnected. Please verify the database');
    process.exit(0);
  });
