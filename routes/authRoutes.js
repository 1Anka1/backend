const express = require('express');
const ctrWrapper = require('../middlewars/ctrWrapper');
const { joiLoginSchema, joiRegisterSchema } = require('../models/users');
const validation = require('../middlewars/validation');
const register = require('../controlers/auth/register');
const login = require('../controlers/auth/login');
const auth = require('../middlewars/auth');
const logout = require('../controlers/auth/logout');

const authRoutes = express.Router();
authRoutes.post(
  '/register',
  validation(joiRegisterSchema),
  ctrWrapper(register)
);

authRoutes.post('/login', validation(joiLoginSchema), ctrWrapper(login));

authRoutes.post('/logout', auth, ctrWrapper(logout));

module.exports = authRoutes;
