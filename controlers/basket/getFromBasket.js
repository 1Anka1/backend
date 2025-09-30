const { Book } = require('../../models/book');

const getFromBasket = async (rec, res) => {
  const { _id } = rec.user;

  const Books = await Book.find({ owner: _id }).populate(
    'owner',
    '_id name email'
  );

  res.status(200).json({ message: 'Success', Books, total: Books.length });
};

module.exports = getFromBasket;
