const { default: axios } = require('axios');
const { BASE_URL, API_KEY } = process.env;

const getAllCategory = async (req, res) => {
  const { categoryName } = req.params;

  const allCategory = await axios.get(
    `${BASE_URL}/current/${categoryName}.json?api-key=${API_KEY}`,
  );
  const category = allCategory.data.results;
  res.status(200).json({ message: 'Successful', data: category });
};

module.exports = getAllCategory;
