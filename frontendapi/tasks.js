const express = require('express');
const router = express.Router();



const { asyncHandler } = require('../utils')
const db = require('../db/models');
const { task } = db;
const { requireAuth } = require('../auth');
const csrf = require('csurf');
const csrfProtection = csrf({ cookie: true });


// Anthony - Brian 
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


router.get('/tasks/taskid', requireAuth, csrfProtection, asyncHandler(async(req, res) => {
  const user_id = req.session.auth.userId;
  const url = req.headers.referer.split('/');
  const listId = url[url.length - 1];

  const lists = await db.list.findAll()

  return res.json({lists, csrfToken: req.csrfToken() })
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




router.put('/tasks/edit-task', async(req, res) => {
  const user_id = req.session.auth.userId;

  const { date_due, list_id, name, id } = req.body;

  const list = await db.list.findOne({
    where: {
      user_id,
      name: list_id
    }
  });
  const newListId = list.id;
  const task = await db.task.findByPk(Number(id));

  task.name = name;
  task.list_id = newListId;
  task.date_due = date_due;


    console.log("SUCCESSFUL")
    return res.json({task});
});
// Anthony - Brian 

// `/home/list/${pageId}/new-task` <--- former action 


module.exports = router;
