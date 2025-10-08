const { default: axios } = require('axios');
const { Book } = require('../../models/book');
const { BASE_URL, API_KEY } = process.env;

const getAllBooks = async (rec, res) => {
  try {
    const existingBooks = await Book.find({});

    if (existingBooks.length > 0) {
      return res.status(200).json({ message: 'Successful', data: existingBooks });
    }
    const books = await axios.get(`${BASE_URL}/v3/lists/overview.json?api-key=${API_KEY}`);
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
    res.status(200).json({ message: 'Fetched from API', data: mappedBooks });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = getAllBooks;
