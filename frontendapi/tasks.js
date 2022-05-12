const express = require('express');
const router = express.Router();



const { asyncHandler } = require('../utils')
const db = require('../db/models');
const { task } = db;
const { requireAuth } = require('../auth');
const csrf = require('csurf');
const csrfProtection = csrf({ cookie: true });



// test route handler
// router.get('/tasks', async (req, res) => {
//   const allTasks = await tasks.findAll();

//   res.json({ allTasks })
// });


// post route handler to submit task data sent from javascripts/index.js
router.post('/tasks', requireAuth, asyncHandler(async (req, res) => {
  const user_id = req.session.auth.userId;
  const url = req.headers.referer.split('/');
  const pageId = url[url.length - 1]
  const { name } = req.body;
    let newTask;

  if (pageId === "home") {
     newTask = await task.create({
      name,
      user_id,
    });
  } else {
     newTask = await task.create({
      name,
      user_id,
      list_id: pageId
    });
  }

  console.log(newTask.id)
  return res.json({task: `${newTask.id}`});
}))


router.get('/tasks/taskid', csrfProtection, asyncHandler(async(req, res) => {
  const user_id = req.session.auth.userId;
  const url = req.headers.referer.split('/');
  const listId = url[url.length - 1];

  const lists = await db.list.findAll()

  return res.json({lists, csrfToken: req.csrfToken() })
}))



router.put('/tasks/edit-task', csrfProtection, asyncHandler(async(req, res) => {
    console.log(req.body);
}))


// `/home/list/${pageId}/new-task` <--- former action attribute in home page form for tasks
// grab the length of the tasks +1


module.exports = router;
