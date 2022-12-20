import multer from 'multer';

import path from 'path';
import crypto from 'crypto';

const multerConfig = {
    dest: path.resolve(__dirname, '..', 'uploads', 'tmp'),
    storage: multer.diskStorage({
        destination: (req: any, file: any, cb: any) => {
            cb(null, path.resolve(__dirname, '..', 'uploads', 'tmp'));
        },
        filename: (req: any, file: any, cb: any) => {
            crypto.randomBytes(16, (err, hash) => {
                if (err) cb(err);

                const filename = `${hash.toString('hex')}-${file.originalname}`;

                cb(null, filename);
            });
        }
    }),
    limits: {
        fileSize: 2 * 1024 * 1024,
        fileFilter: (req: any, file: any, cb: any) => {            
            const allowedMimes = [
                'image/jpeg',
                'image/gif',
                'image/png',
                'image/gif'
            ];

            if (allowedMimes.includes(file.mimetype)) {
                cb(null, true);
            } else {
                cb(new Error('Invalid file type.'));
            }
        }
    }
};

export default multerConfig;