const { Book } = require('../../models/book');
const { NotFound } = require('http-errors');

const deleteFromBasket = async (rec, res) => {
  const { _id } = rec.user;
  const { id } = rec.params;

  const BookToDelete = await Book.findOneAndDelete({
    _id: id,
    owner: _id,
  });

  if (!BookToDelete) {
    throw NotFound('Book not found');
  }

  res.status(200).json({ message: 'Book was deleted', data: BookToDelete });
};

module.exports = deleteFromBasket;
