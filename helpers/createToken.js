const jwToken = require('jsonwebtoken');

const { SECRET_KEY } = process.env;

const createToken = (payload) => {
  const token = jwToken.sign(payload, SECRET_KEY, { expiresIn: '24h' });
  return token;
};

module.exports = createToken;
