import multer from 'multer';
import crypto from 'crypto';
import { resolve, extname } from 'path';

const Upload = multer({
  storage: multer.diskStorage({
    destination: resolve(__dirname, '..', '..', 'tmp'),
    filename: (_, file, callback) => {
      callback(null, crypto.randomBytes(16).toString('hex') + extname(file.originalname));
    },
  }),
});

export default Upload;
