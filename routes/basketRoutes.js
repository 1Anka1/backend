const express = require('express');
const ctrWrapper = require('../middlewars/ctrWrapper');
const auth = require('../middlewars/auth');
const addToBasket = require('../controlers/basket/addToBasket');
const getFromBasket = require('../controlers/basket/getFromBasket');
const deleteFromBasket = require('../controlers/basket/deleteFromBasket');

const basketRoutes = express.Router();

basketRoutes.post('/addToBasket', auth, ctrWrapper(addToBasket));
basketRoutes.get('/getFromBasket', auth, ctrWrapper(getFromBasket));
basketRoutes.delete(
  '/deleteFromBasket/:id',
  auth,
  ctrWrapper(deleteFromBasket)
);

module.exports = basketRoutes;
