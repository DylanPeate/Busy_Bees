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

router.get('/', requireAuth, async (req, res) => {
    const lists = await db.list.findAll({
        where: { user_id: req.session.auth.userId }
    })
    const tasks = [];
    lists.forEach(async (list) => {
        listId = list.id;
        currentTasks = await db.task.findAll({
            where: { list_id: listId }
        })
        tasks.push(...currentTasks)
    })
    setTimeout(() => {
        res.render('home', { lists, tasks })
    }, 100)
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


router.get('/list/:id', requireAuth, (async (req, res) => {
    //get info
    const lists = await db.list.findAll({
        where: { user_id: req.session.auth.userId }
    })
    const pageId = parseInt(req.params.id, 10);
    const tasks = await db.task.findAll({
        where: { list_id: pageId }
    })
    res.render('home', { lists, pageId, tasks });
}))

// tasks
router.post('/list/:id/new-task', csrfProtection, asyncHandler, (async (req, res) => {
    const { name, date_due, priority, completed, deleted, notes } = req.body;

    //get their main list id
    const user_id = req.session.auth.userId;
    const mainList = await db.list.findOne({
        where: { userId: user_id, name: 'All Tasks' }
    })

    //check what list
    const pageId = parseInt(req.params.id, 10);
    if (pageId === mainList.id) {
        //create task in mainList
        await db.task.create({
            name, date_due, priority, completed, list_id: mainList.id
        })
    } else {
        //create task in mainlist and list with pageId
        await db.task.create({
            name, date_due, priority, completed, list_id: mainList.id
        })
        await db.task.create({
            name, date_due, priority, completed, list_id: pageId
        })
    }

    //create task
    const newTask = await db.task.create({
        name, priority, completed, deleted, notes, list_id
    })

}))

module.exports = router;
