var express = require('express');
var router = express.Router();
const csrf = require('csurf');
const csrfProtection = csrf({ cookie: true });
const { asyncHandler, handleValidationErrors } = require("../utils");


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//signup route
router.get('/sign-up', csrfProtection, (req, res) => {
  res.render('sign-up', { csrfToken: req.csrfToken(), errors: [], user: {} })
})

module.exports = router;
