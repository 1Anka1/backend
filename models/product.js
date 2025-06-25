const { Schema, model } = require('mongoose');
const Joi = require('joi');

const productSchema = Schema(
  {
    id: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
    qty: {
      type: Number,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const Product = model('product', productSchema);

const joiProductSchema = Joi.object({
  id: Joi.number().required(),
  title: Joi.string().required(),
  price: Joi.number().required(),
  category: Joi.string().required(),
  image: Joi.string().required(),
  qty: Joi.number().required(),
});

module.exports = {
  Product,
  joiProductSchema,
};
