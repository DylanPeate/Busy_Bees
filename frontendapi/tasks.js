const express = require('express');
const router = express.Router();
const { asyncHandler } = require('../utils')
const db = require('../db/models');
const { task } = db;


// test route handler
router.get('/tasks', async (req, res) => {
  const allTasks = await tasks.findAll();

  res.json({ allTasks })
});


// post route handler to submit task data sent from javascripts/index.js
router.post('/tasks', asyncHandler(async (req, res) => {
  const user_id = req.session.auth.userId;
  const url = req.headers.referer.split('/');
  const pageId = url[url.length - 1]
  console.log(pageId, "<--Page ID")
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



module.exports = router;


// `/home/list/${pageId}/new-task` <--- former action attribute in home page form for tasks



module.exports = router;
