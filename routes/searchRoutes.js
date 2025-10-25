const express = require('express');
const ctrWrapper = require('../middlewars/ctrWrapper');
const getBooksBySearch = require('../controlers/getBooksBySearch/getBooksBySearch');

const searchRoutes = express.Router();

searchRoutes.get('/:value', ctrWrapper(getBooksBySearch));

module.exports = searchRoutes;
