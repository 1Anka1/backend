const { Product } = require('../../models/product');

const getFromBasket = async (rec, res) => {
  const { _id } = rec.user;

  const products = await Product.find({ owner: _id }).populate(
    'owner',
    '_id name email'
  );

  res
    .status(200)
    .json({ message: 'Success', products, total: products.length });
};

module.exports = getFromBasket;
