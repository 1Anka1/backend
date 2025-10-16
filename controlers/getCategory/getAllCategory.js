const { default: axios } = require('axios');
const { BASE_URL, API_KEY } = process.env;

const getAllCategory = async (req, res) => {
  console.log(req.params);

  const getAllCategory = await axios.get(
    `${BASE_URL}/v3/lists/current/${categoryName}.json?api-key=${API_KEY}`,
  );

  const category = getAllCategory.data.results;
  console.log('category:', category);

  // try {
  //   const { categoryName } = req.params;
  //   console.log('categoryName:', categoryName);

  //   const getAllCategory = await axios.get(
  //     `${BASE_URL}/v3/lists/current/${categoryName}.json?api-key=${API_KEY}`,
  //   );

  //   const category = getAllCategory.data.results;
  //   console.log('category:', category);

  //   res.status(200).json({ message: 'Successful', data: category });
  // } catch (error) {
  //   console.error(error);
  //   res.status(500).json({ message: 'Failed to fetch category data' });
  // }
};

module.exports = getAllCategory;
