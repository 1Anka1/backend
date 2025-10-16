const { default: axios } = require('axios');
const { Book } = require('../../models/book');
const { BASE_URL, API_KEY } = process.env;

const getAllBooks = async (rec, res) => {
  const books = await axios.get(`${BASE_URL}/overview.json?api-key=${API_KEY}`);
  const lists = books.data.results.lists;

  const mappedBooks = lists.flatMap((list) =>
    list.books.map((book) => ({
      title: book.title,
      author: book.author,
      description: book.description || 'No description',
      price: Math.floor(Math.random() * 20) + 10,
      publisher: book.publisher || null,
      book_image: book.book_image || null,
      book_review_link: book.book_review_link || null,
      qty: 1,
      category: list.display_name,
    })),
  );

  await Book.insertMany(mappedBooks);

  const allBooks = await Book.find({});
  res.status(200).json({ message: 'Successful', data: allBooks });
};

module.exports = getAllBooks;
