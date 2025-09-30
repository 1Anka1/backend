const { Book } = require('../../models/book');
const { NotFound } = require('http-errors');

const updateBookInBasket = async (rec, res) => {
  const { _id } = rec.user;
  const { id } = rec.params;
  const { body } = rec;

  const BookInBasketToUpdate = await Book.findOneAndUpdate(
    {
      _id: id,
      owner: _id,
    },
    {
      $set: body,
    },
    { new: true, runValidators: true }
  );

  if (!BookInBasketToUpdate) {
    throw NotFound('Book not found');
  }

  res.status(200).json({
    message: 'Book was updated',
    data: BookInBasketToUpdate,
  });
};

module.exports = updateBookInBasket;
