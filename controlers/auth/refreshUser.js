const { User } = require('../../models/users');
const { Unauthorized } = require('http-errors');

const refreshUser = async (rec, res) => {
  const { _id, name, email, avatar, token } = rec.user;
  console.log('user', rec.user);

  res
    .status(200)
    .json({ message: 'Refresh is complited', data: { _id, name, email, avatar, token } });
};

module.exports = refreshUser;
