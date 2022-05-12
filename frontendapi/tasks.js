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

  const { name } = req.body;
  console.log(name, '<--------------- NAME')
  const newTask = await task.create({
    name,
    user_id
  });
  return res.json({ name });
}))



module.exports = router;


// `/home/list/${pageId}/new-task` <--- former action attribute in home page form for tasks 