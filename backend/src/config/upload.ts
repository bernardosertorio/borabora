import path from 'path';
import crypto from 'crypto';
import multer from 'multer';

// interface IUploadConfig {
// tmpFolder: string;
// uploadsFolder: string;

// multer: {
//  storage: StorageEngine;
// };
// }

const tmpFolder = path.resolve(__dirname, '..', '..', 'tmp');

export default {
  tmpFolder,
  uploadFolder: path.resolve(tmpFolder, 'uploads'),

  multer: {
    storage: multer.diskStorage({
      destination: tmpFolder,
      filename(request, file, callback) {
        const filehash = crypto.randomBytes(10).toString('hex');
        const fileName = `${filehash}-${file.originalname}`;

        return callback(null, fileName);
      },
    }),
  },
};
