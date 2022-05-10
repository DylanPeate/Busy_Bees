var express = require('express');
var router = express.Router();
const { check, validationResult } = require("express-validator")
const cookieParser = require('cookie-parser');
const csrf = require('csurf');
const csrfProtection = csrf({ cookie: true });
const { asyncHandler, handleValidationErrors } = require("../utils");
const bcrypt = require('bcryptjs');
const db = require('../db/models');
const { loginUser, logoutUser } = require('../auth');






module.exports = router;
