const { Product } = require('../../models/product');
const { NotFound } = require('http-errors');

const deleteFromBasket = async (rec, res) => {
  const { _id } = rec.user;
  const { id } = rec.params;

  console.log('id======', _id);

  const productToDelete = await Product.findOneAndDelete({
    _id: id,
    owner: _id,
  });

  if (!productToDelete) {
    throw NotFound('Product not found');
  }

  res
    .status(200)
    .json({ message: 'Product was deleted', data: productToDelete });
};

module.exports = deleteFromBasket;
