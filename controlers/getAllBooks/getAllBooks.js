const { Book } = require('../../models/book');

const getAllBooks = async (req, res) => {
  const { value } = req.params;

  const allBooks = await Book.find({});

  if (value === 'categories') {
    const categories = allBooks.data.map(({ display_name, list_name_encoded, list_id }) => ({
      category: display_name,
      encode: list_name_encoded,
      id: list_id,
    }));
    return res
      .status(200)
      .json({ message: 'Successful! You got all categories', data: categories });
  }

  return res.status(200).json({
    message: 'Successful!',
    data: allBooks,
  });
};
module.exports = getAllBooks;

// OLD CODE FOR SAVING DATA TO BACKEND:
// const response = await axios.get(`${BASE_URL}/overview.json?api-key=${API_KEY}`);
// const lists = response.data?.results?.lists || [];

// if (allBooks.length === 0) {
//   const mappedBooks = lists.flatMap((list) =>
//     list.books.map((book) => ({
//       title: book.title,
//       author: book.author,
//       description: book.description || 'No description',
//       price: Math.floor(Math.random() * 20) + 10,
//       publisher: book.publisher || 'Unknown',
//       book_image: book.book_image || null,
//       book_review_link: book.book_review_link || null,
//       qty: 1,
//       category: list.display_name,
//       list_name_encoded: list.list_name_encoded,
//       list_id: list.list_id,
//     })),
//   );

//   await Book.insertMany(mappedBooks);

//   return res.status(200).json({
//     message: 'Successful! You got all books',
//     data: mappedBooks,
//   });
// }
