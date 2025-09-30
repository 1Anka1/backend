const { default: axios } = require('axios');
const { Book } = require('../../models/book');
const { BASE_URL, API_KEY } = process.env;

const getAllBooks = async (rec, res) => {
  const books = await axios.get(
    `${BASE_URL}/v3/lists/overview.json?api-key=${API_KEY}`
  );
  await Book.insertMany(books);
  const allBooks = await Book.find({});

  res.status(200).json({ message: 'Successful', data: allBooks });
};

module.exports = getAllBooks;
