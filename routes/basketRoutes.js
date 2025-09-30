const express = require('express');
const ctrWrapper = require('../middlewars/ctrWrapper');
const auth = require('../middlewars/auth');
const addToBasket = require('../controlers/basket/addToBasket');
const getFromBasket = require('../controlers/basket/getFromBasket');
const deleteFromBasket = require('../controlers/basket/deleteFromBasket');
const updateBookInBasket = require('../controlers/basket/updateBookInBasket');
const upload = require('../middlewars/upload');
const basketRoutes = express.Router();

basketRoutes.post(
  '/addToBasket',
  auth,
  upload.single('avatar'),
  ctrWrapper(addToBasket)
);
basketRoutes.get('/getFromBasket', auth, ctrWrapper(getFromBasket));
basketRoutes.delete(
  '/deleteFromBasket/:id',
  auth,
  ctrWrapper(deleteFromBasket)
);
basketRoutes.put(
  '/updateBookInBasket/:id',
  auth,
  ctrWrapper(updateBookInBasket)
);

module.exports = basketRoutes;
