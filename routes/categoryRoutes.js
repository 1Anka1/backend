const express = require('express');
const ctrWrapper = require('../middlewars/ctrWrapper');
const getAllCategory = require('../controlers/getCategory/getAllCategory');

const categoryRotes = express.Router();

categoryRotes.get('/:categoryName', ctrWrapper(getAllCategory));

module.exports = categoryRotes;
