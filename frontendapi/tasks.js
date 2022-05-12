const express = require('express');
const router = express.Router();
const { asyncHandler } = require('../utils')
const db = require('../db/models');
const { requireAuth } = require('../auth');
const csrf = require('csurf');
const csrfProtection = csrf({ cookie: true });
const { task } = db;


// test route handler
router.get('/tasks', async (req, res) => {
  const allTasks = await tasks.findAll();

  res.json({ allTasks })
});


// post route handler to submit task data sent from javascripts/index.js
router.post('/tasks', requireAuth, asyncHandler(async (req, res) => {
  const user_id = req.session.auth.userId;
  const url = req.headers.referer.split('/');
  const pageId = url[url.length - 1]
  const { name } = req.body;

  if (pageId === "home") {
    const newTask = await task.create({
      name,
      user_id
    });
  } else {
    const newTask = await task.create({
      name,
      user_id,
      list_id: pageId
    });
  }


  return res.json({ name });
}))


//lists

router.post('/new-list', requireAuth, asyncHandler(async (req, res) => {
  const user_id = req.session.auth.userId;
  const { name } = req.body;
  let createdTask;

  createdTask = await db.list.create({ name, user_id })

  return res.json({ createdTask })
}))

//delete list

router.delete('/list/:id/delete', csrfProtection, requireAuth, asyncHandler(async (req, res) => {
  const pageId = parseInt(req.params.id, 10);
  const user_id = req.session.auth.userId;
  const tasks = await db.task.findAll({
    where: { user_id }
  })
  const deletedList = await db.list.findOne({
    where: {
      id: pageId
    }
  })
  await db.task.destroy({
    where: {
      list_id: pageId,
      user_id
    }
  })
  await deletedList.destroy();

  res.redirect('/home')
}))




module.exports = router;


// `/home/list/${pageId}/new-task` <--- former action attribute in home page form for tasks



module.exports = router;
