const cloudinaryImgUpload = require('../../helpers/cloudinaryImgUpload');
const { Book } = require('../../models/book');

const addToBasket = async (rec, res) => {
  const { _id } = rec.user;
  const { body } = rec;
  const { file } = rec;

  if (file) {
    const { avatarUrl } = await cloudinaryImgUpload(rec);
    body.avatarUrl = avatarUrl;
  } else {
    body.avatarUrl = data.avatar;
  }

  const Book = await Book.create({ ...body, owner: _id });

  res
    .status(201)
    .json({ message: 'The Book was added to the basket', body: Book });
};

module.exports = addToBasket;
