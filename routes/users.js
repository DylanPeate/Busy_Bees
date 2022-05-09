var express = require('express');
var router = express.Router();
const { check, validationResult } = require("express-validator")
<<<<<<< HEAD
const cookieParser = require('cookie-parser')
=======
const cookieParser = require('cookie-parser');
const csrf = require('csurf');
const csrfProtection = csrf({ cookie: true });
const { asyncHandler, handleValidationErrors } = require("../utils");

>>>>>>> fc4f780d3890e507690bc378fd9cb9d20f1c29da


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

<<<<<<< HEAD

=======
>>>>>>> fc4f780d3890e507690bc378fd9cb9d20f1c29da
const loginValidators = [
  check('emailAddress')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Email Address'),
  check('password')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Password'),
];

router.get('/user/login', csrfProtection, (req,res)=>{
  res.render('user-login', {title: "Log-in", csrfToken: req.csrfToken()})
})

router.post('/user/login', csrfProtection, loginValidators,
  asyncHandler(async (req, res) => {
    const {
      emailAddress,
      password,
    } = req.body;

    let errors = [];
    const validatorErrors = validationResult(req);

    if (validatorErrors.isEmpty()) {
      // TODO Attempt to login the user.
      const user= await User.findOne({where:{emailAddress}})
      if(user !== null){
          const passwordMatch = await bcrypt.compare(password, user.hashedPassword.toString())
          if(passwordMatch){
              loginUser(req,res,user)
              return res.redirect('/')
          }
      }
      errors.push('Login failed for the provided email address and password')
    } else {
      errors = validatorErrors.array().map((error) => error.msg);
    }

    res.render('user-login', {
      title: 'Login',
      emailAddress,
      errors,
      csrfToken: req.csrfToken(),
    });
  }));

router.post('/user/logout', (req,res)=>{
    logoutUser(req,res)
    res.redirect('/user/login')
})


<<<<<<< HEAD
=======
//signup route
router.get('/sign-up', csrfProtection, (req, res) => {
  res.render('sign-up', { csrfToken: req.csrfToken(), errors: [], user: {} })
})

>>>>>>> fc4f780d3890e507690bc378fd9cb9d20f1c29da
module.exports = router;
