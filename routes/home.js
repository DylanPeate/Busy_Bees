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

//list routes
router.get('/new-list', csrfProtection, (req, res) => {
    res.render('new-list', { title: 'New-list', csrfToken: req.csrfToken() })
})

router.post('/new-list', csrfProtection, asyncHandler(async (req, res) => {
    const user_id = req.session.auth.userId;
    const { name } = req.body;
    if (name.length < 1) {
        req.errors.push('Name is too short')
    } else {
        await db.list.create({ name, user_id })
        res.redirect('/home')
    }
}))


module.exports = router;
