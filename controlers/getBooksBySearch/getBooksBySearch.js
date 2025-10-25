const { Book } = require('../../models/book');

const getBooksBySearch = async (req, res) => {
  const { value } = req.params;

  if (!value) {
    return res.status(400).json({ message: 'Missing search value' });
  }

  const books = await Book.find({
    $or: [
      { title: { $regex: value, $options: 'i' } },
      { author: { $regex: value, $options: 'i' } },
    ],
  });

  if (!books.length) {
    return res.status(404).json({ message: 'No books found' });
  }

  res.status(200).json({ message: 'Successful search', data: books });
};

module.exports = getBooksBySearch;
