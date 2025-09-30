const cloudinary = require('cloudinary').v2;
const dotenv = require('dotenv');
const fs = require('fs/promises');

dotenv.config();
const { CLOUD_NAME, CLOUD_API_KEY, CLOUD_API_SECRET_KEY } = process.env;
cloudinary.config({
  cloud_name: CLOUD_NAME,
  api_key: CLOUD_API_KEY,
  api_secret: CLOUD_API_SECRET_KEY,
  secure: true,
});

const cloudinaryImgUpload = async (rec) => {
  if (!rec.file) {
    return;
  }
  const { path: tempUpload } = rec.file;
  try {
    const { secure_url: avatarUrl, public_id: idCloudAvatar } =
      await cloudinary.uploader.upload(tempUpload, {
        folder: 'images',
        transformation: {
          width: 488,
          height: 488,
          gravity: 'auto',
          crop: 'fill',
        },
      });
    console.log('Avatar URL', avatarUrl);

    await fs.unlink(tempUpload);
    return { avatarUrl, idCloudAvatar };
  } catch (error) {
    await fs.unlink(tempUpload);
    throw new Error(error.message);
  }
};

module.exports = cloudinaryImgUpload;
