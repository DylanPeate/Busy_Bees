var express = require('express');
var router = express.Router();
const { check, validationResult } = require("express-validator")
const cookieParser = require('cookie-parser');
const csrf = require('csurf');
const csrfProtection = csrf({ cookie: true });
const { asyncHandler, handleValidationErrors } = require("../utils");
const bcrypt = require('bcryptjs');
const db = require('../db/models');
const { loginUser, logoutUser, requireAuth } = require('../auth');

router.get('/', requireAuth, csrfProtection, async (req, res) => {
    const user_id = req.session.auth.userId;
    const lists = await db.list.findAll({
        where: { user_id: req.session.auth.userId }
    })
    const mainList = await db.list.findOne({
        where: { user_id: user_id, name: 'All Tasks' }
    })
    const pageId = mainList.id;

    // const tasks = [];
    // lists.forEach(async (list) => {
    //     listId = list.id;
    //     currentTasks = await db.task.findAll({
    //         where: { list_id: listId }
    //     })
    //     tasks.push(...currentTasks)
    // })
    // setTimeout(() => {
    //     res.render('home', { lists, pageId, tasks, crsfToken: req.csrfToken() })
    // }, 100)

    res.redirect(`/home/list/${pageId}`)
})



//list routes
router.get('/new-list', csrfProtection, requireAuth, (req, res) => {
    res.render('new-list', { title: 'New-list', csrfToken: req.csrfToken() })
})

router.post('/new-list', csrfProtection, asyncHandler, requireAuth, (async (req, res) => {
    const user_id = req.session.auth.userId;
    const { name } = req.body;
    if (name.length < 1) {
        req.errors.push('Name is too short')
    } else {
        await db.list.create({ name, user_id })
        res.redirect('/home')
    }
}))


router.get('/list/:id', csrfProtection, requireAuth, (async (req, res) => {
    //get info
    const lists = await db.list.findAll({
        where: { user_id: req.session.auth.userId }
    })
    const pageId = parseInt(req.params.id, 10);
    const tasks = await db.task.findAll({
        where: { list_id: pageId }
    })
    res.render('home', { lists, pageId, tasks, csrfToken: req.csrfToken() });
}))



module.exports = router;
