const { User } = require('../../models/users');
const { Unauthorized } = require('http-errors');

const logout = async (rec, res) => {
  const { _id } = rec.user;
  await User.findByIdAndUpdate(_id, { token: null });

  res.status(204).json({ message: 'Logout is complited', data: { _id } });
};

module.exports = logout;
