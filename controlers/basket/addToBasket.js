const { Product } = require('../../models/product');

const addToBasket = async (rec, res) => {
  const { _id } = rec.user;
  const { data } = rec.body;

  const product = await Product.create({ ...data, owner: _id });

  res
    .status(201)
    .json({ message: 'The product was added to the basket', data: product });
};

module.exports = addToBasket;
