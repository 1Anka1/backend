const { User } = require('../../models/users');
const createToken = require('../../helpers/createToken');
const { Conflict } = require('http-errors');

const register = async (rec, res) => {
  const user = await User.findOne({ email: rec.body.email });

  if (user) {
    throw new Conflict('Email is use');
  }
  const newUser = new User({ name: rec.body.name, email: rec.body.email });

  await newUser.setPassword(rec.body.password);

  const payload = { id: newUser._id };
  const token = createToken(payload);
  newUser.token = token;

  await newUser.save();

  res.status(201).json({
    message: 'Registation is complite',
    data: { name: newUser.name, email: newUser.email, token: newUser.token },
  });
};

module.exports = register;
