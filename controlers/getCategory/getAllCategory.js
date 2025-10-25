const { Book } = require('../../models/book');

const getBooksByCategory = async (req, res) => {
  const { categoryName } = req.params;

  const results = await Book.find({ list_name_encoded: categoryName });
  console.log(results);

  res.status(200).json({ message: 'Successful', data: results });
};

module.exports = getBooksByCategory;

// OLD CODE FOR SAVING DATA TO BACKEND:
// const overviewResp = await axios.get(
//   `${BASE_URL}/current/${categoryName}.json?api-key=${API_KEY}`,
// );

// const category = overviewResp.data.results.books;
// const mappedCategoryBooks = category.map((book) => ({
//   title: book.title,
//   author: book.author,
//   description: book.description || 'No description',
//   price: Math.floor(Math.random() * 20) + 10,
//   publisher: book.publisher || 'Unknown',
//   book_image: book.book_image || null,
//   book_review_link: book.book_review_link || null,
//   qty: 1,
// }));
