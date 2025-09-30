const multer = require('multer');
const patch = require('path');

const tempDir = patch.join(__dirname, '../', 'temp');

const multerConf = multer.diskStorage({
  dest: tempDir,
  filename: (rec, file, cd) => {
    cd(null, file.originalname);
  },
  limits: { fileSize: 2048 },
  fileFilter: (rec, file, cd) => {
    if (file.mimetype.includs('image')) {
      cd(null, true);
      return;
    }
    cd(null, false);
  },
});

const upload = multer({
  storage: multerConf,
  fileFilter: (rec, file, cd) => {
    if (
      file.mimetype === 'image/png' ||
      file.mimetype === 'image/jpg' ||
      file.mimetype === 'image/jpeg' ||
      file.mimetype === 'image/webp'
    ) {
      cd(null, true);
    } else {
      cd(null, false);
      return cd(new Error('Only .png, .jpg, .jpeg, .webp'));
    }
  },
});

module.exports = upload;
