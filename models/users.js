const { Schema, model } = require('mongoose');
const Joi = require('joi');
const bcryptjs = require('bcryptjs');

const handleDbSchemaError = require('../helpers/handelDbSchemaErro.js');

const userDbSchema = Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
    },

    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
    },

    password: {
      type: String,
      required: [true, 'Password is required'],
      minLength: 6,
    },

    avatar: {
      type: String,
      default: null,
    },

    token: {
      type: String,
      default: '',
    },
  },
  { versionKey: false, timestamps: true }
);

userDbSchema.methods.setPassword = async function (password) {
  this.password = await bcryptjs.hash(password, 10);
};

userDbSchema.methods.checkPassword = function (password) {
  return bcryptjs.compare(password, this.password);
};

userDbSchema.post('save', handleDbSchemaError);
userDbSchema.post('findOneAndUpdate', handleDbSchemaError);

const User = model('user', userDbSchema);

const joiRegisterSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

const joiLoginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

module.exports = {
  User,
  joiRegisterSchema,
  joiLoginSchema,
};
