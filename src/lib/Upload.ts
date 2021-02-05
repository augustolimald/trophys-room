import crypto from 'crypto';
import { Options } from 'multer';
import cloudinary from 'cloudinary';
import cloudinaryStorage from 'multer-storage-cloudinary';

function options(folder: string, type: string): Options {
  const ext = [];

  if (type === 'image') {
    ext.push('jpg', 'jpeg', 'png', 'tiff', 'gif', 'bmp', 'svg');
  }

  return {
    storage: cloudinaryStorage({
      cloudinary,
      folder,
      allowedFormats: ext.length > 0 ? ext : undefined,

      filename: (request, file, callback) => {
        callback(null, crypto.randomBytes(16).toString('hex'));
      },
    }),
  };
}

export { options };
export default options;
