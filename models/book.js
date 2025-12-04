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
      default:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
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

    category: {
      type: String,
    },

    list_name_encoded: {
      type: String,
    },

    list_id: {
      type: Number,
    },

    qty: {
      type: Number,
      required: true,
      default: 1,
    },
  },
  { versionKey: false, timestamps: true },
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
