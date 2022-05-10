var express = require('express');
var router = express.Router();
const { check, validationResult } = require("express-validator")
const cookieParser = require('cookie-parser');
const csrf = require('csurf');
const csrfProtection = csrf({ cookie: true });
const { asyncHandler, handleValidationErrors } = require("../utils");
const bcrypt = require('bcryptjs')
const db = require('../db/models');
const { loginUser, logoutUser } = require('../auth')




/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

const loginValidators = [
  check('email')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Email Address'),
  check('password')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Password'),
];

router.get('/login', csrfProtection, (req, res) => {
  res.render('user-login', { title: "Log-in", csrfToken: req.csrfToken() })
})

router.post('/login', csrfProtection, loginValidators,
  asyncHandler(async (req, res) => {
    const {
      email,
      password,
    } = req.body;

    let errors = [];
    const validatorErrors = validationResult(req);

    if (validatorErrors.isEmpty()) {
      // TODO Attempt to login the user.
      const User = await db.user.findOne({ where: { email } })
      if (User !== null) {
        const passwordMatch = await bcrypt.compare(password, User.hashed_password.toString())
        if (passwordMatch) {
          loginUser(req, res, User)
          return res.redirect('/home')
        }
      }
      errors.push('Login failed for the provided email address and password')
    } else {
      errors = validatorErrors.array().map((error) => error.msg);
    }

    res.render('user-login', {
      title: 'Login',
      email,
      errors,
      csrfToken: req.csrfToken(),
    });
  }));

router.post('/logout', (req, res) => {
  logoutUser(req, res)
  res.redirect('/user/login')
})


//signup route
router.get('/sign-up', csrfProtection, (req, res) => {
  res.render('sign-up', { csrfToken: req.csrfToken(), errors: [], user: {} })
})


const signUpValidator = async (req, res, next) => {
  const { firstName, lastName, email, username, password, confirmPassword } = req.body;
  const emailRegex = /^[^\s@]+@\w+\.[A-z]{2,3}$/;
  req.errors = [];

  if (firstName.length < 2) {
    req.errors.push('Name is to short')
  }
  if (lastName.length < 2) {
    req.errors.push('Name is to short')
  }
  if (!emailRegex.test(email)) {
    req.errors.push('Invalid email')
  }
  if (await db.user.findOne({
    where: { email: email }
  })) {
    req.errors.push('Email already registered to an account')
  }
  if (username.length < 5) {
    req.errors.push('Username is to short')
  }
  if (await db.user.findOne({
    where: { username: username }
  })) {
    req.errors.push('Username already taken')
  }
  if (!(password === confirmPassword)) {
    req.errors.push('Passwords do not match')
  }

  next()
}

router.post('/sign-up', csrfProtection, signUpValidator, async (req, res) => {
  const { firstName, lastName, email, username, password, confirmPassword } = req.body;
  if (req.errors.length > 0) {
    res.render('sign-up', {
      csrfToken: req.csrfToken(),
      errors: req.errors,
      user: req.body
    })
    console.log(req.errors)
  } else {
    const hashed_password = await bcrypt.hash(password, 12)
    console.log(hashed_password)
    const newUser = await db.user.create({
      firstName, lastName, username, email, hashed_password
    })
    await db.list.create({
      name: "Personal", user_id: newUser.id
    })
    await db.list.create({
      name: "Work", user_id: newUser.id
    })
    res.redirect('/users/login')
  }
})

module.exports = router;
