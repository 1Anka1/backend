const { User } = require('../../models/users');
const createToken = require('../../helpers/createToken');
const { Unauthorized } = require('http-errors');
const bcryptjs = require('bcryptjs');

const login = async (rec, res) => {
  const { email, password } = rec.body;
  const user = await User.findOne({ email });
  const passwordCompare = bcryptjs.compareSync(password, user?.password);

  if (!user || !passwordCompare) {
    throw Unauthorized('Email or password is wrong');
  }

  const payload = { id: user._id };
  const token = createToken(payload);

  await User.findByIdAndUpdate(user._id, { token });

  res.status(200).json({
    message: 'You are login',
    data: { name: user.name, email: user.email, token },
  });
};

module.exports = login;
