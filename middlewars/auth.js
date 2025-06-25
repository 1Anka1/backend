const { SECRET_KEY } = process.env;
const { Unauthorized } = require('http-errors');
const jwToken = require('jsonwebtoken');
const { User } = require('../models/users');

const auth = async (rec, _, next) => {
  const { authorization = '' } = rec.headers;
  const [bearer, token] = authorization.split(' ');

  try {
    if (bearer !== 'Bearer' || !token) {
      throw Unauthorized('You are not unauthorized');
    }

    const { id } = jwToken.verify(token, SECRET_KEY);
    const user = await User.findById(id);

    if (!user || !user.token || token !== user.token) {
      throw Unauthorized('You are not unauthorized');
    }
    rec.user = user;
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = auth;
