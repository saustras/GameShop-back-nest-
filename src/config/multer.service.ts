import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import * as multer from 'multer';

const cloudinaryStorage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async (req, file) => {
    return {
      folder: 'image',
      public_id: file.originalname,
    };
  },
});

export const MulterConfig = {
  storage: cloudinaryStorage,
  limits: {
    fileSize: 50 * 1024 * 1024,
  },
};