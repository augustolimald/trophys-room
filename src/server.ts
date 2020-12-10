import app from './app';
import Env from './env';
import Database from './database';

Database.connect().then((connected: boolean) => {
  if (connected) {
    const port = Env.get('PORT', 8080);
    const url = Env.get('URL', `http://localhost:${port}`);

    app.listen(port, () => {
      console.log(`Server running on ${url}`);
    });
  } else {
    console.log('Server did not start because database is offline');
    process.exit(0);
  }
});
