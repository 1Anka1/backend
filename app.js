/* eslint-disable no-redeclare */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */

const express = require('express');
const cors = require('cors');
require('dotenv').config();
const authRoutes = require('./routes/authRoutes');
const basketRoutes = require('./routes/basketRoutes');
const booksRotes = require('./routes/bookRoutes');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.use('/api/auth', authRoutes);
app.use('/api/basket', basketRoutes);
app.use('/api/books', booksRotes);

app.use((_, res) => {
  res.status(404).json({ message: 'Not found' });
});

app.use((error, rec, res, next) => {
  const { status = 500, message = 'Server ERROR' } = error;
  res.status(status).json({ message });
});

module.exports = app;
