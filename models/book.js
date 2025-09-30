const { Schema, model } = require('mongoose');
const Joi = require('joi');

const bookSchema = Schema(
  {
    title: {
      type: String,
      required: true,
    },

    author: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    publisher: {
      type: String,
    },

    book_image: {
      type: String,
    },

    book_review_link: {
      type: String,
    },

    qty: {
      type: Number,
      required: true,
      default: 1,
    },
  },
  { versionKey: false, timestamps: true }
);

const Book = model('book', bookSchema);

const joiBookSchema = Joi.object({
  id: Joi.number().required(),
  title: Joi.string().required(),
  price: Joi.number().required(),
  category: Joi.string().required(),
  avatarUrl: Joi.string().required(),
  qty: Joi.number().required(),
});

module.exports = {
  Book,
  joiBookSchema,
};
