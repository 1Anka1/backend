const express = require('express');
const ctrWrapper = require('../middlewars/ctrWrapper');
const getAllBooks = require('../controlers/getAllBooks/getAllBooks');

const booksRotes = express.Router();

booksRotes.get('/', ctrWrapper(getAllBooks));

module.exports = booksRotes;
