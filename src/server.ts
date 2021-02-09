import 'dotenv/config';
import app from './app';
import database from './database';

const port = process.env.PORT || 8080;
const url = process.env.URL || `http://localhost:${port}`;

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
