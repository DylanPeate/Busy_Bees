const express = require('express');
const router = express.Router();
const { asyncHandler } = require('../utils')
const db = require('../db/models');
const { task } = db;
const { requireAuth } = require('../auth');
const csrf = require('csurf');
const csrfProtection = csrf({ cookie: true });

router.get('/tasks', requireAuth, async (req, res) => {
  const user_id = req.session.auth.userId;
  const theTask = await task.findAll({
    where: {
      user_id
    }
  });

  return res.json({ theTask })
})

// Anthony - Brian
router.post('/tasks', requireAuth, asyncHandler(async (req, res) => {
  const user_id = req.session.auth.userId;
  const url = req.headers.referer.split('/');
  const pageId = url[url.length - 1]
  const { name } = req.body;
  let newTask;

  if (name.length >= 1) {
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
  }

  return res.json({ task: `${newTask.id}` });
}))


router.get('/tasks/taskid', requireAuth, csrfProtection, asyncHandler(async (req, res) => {
  const user_id = req.session.auth.userId;
  const url = req.headers.referer.split('/');
  const listId = url[url.length - 1];

  const lists = await db.list.findAll({
    where: { user_id }
  })

  return res.json({ lists, csrfToken: req.csrfToken() })
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

// router.get('/list/:id/delete', csrfProtection, requireAuth, asyncHandler(async (req, res) => {
//   const pageId = parseInt(req.params.id, 10);
//   const user_id = req.session.auth.userId;
//   const deletedList = await db.list.findOne({
//     where: {
//       id: pageId,
//       user_id
//     }
//   })
//   await db.task.destroy({
//     where: {
//       list_id: pageId,
//       user_id
//     }
//   })
//   await deletedList.destroy();

//   res.redirect('/home')
// }))

//delete task
router.delete('/tasks/delete-task', requireAuth, asyncHandler(async (req, res) => {
  const user_id = req.session.auth.userId;
  const { id } = req.body
  const deletedTask = await db.task.destroy({
    where: {
      id,
      user_id
    }
  })
  return res.json({ deletedTask })
}))


router.put('/tasks/edit-task', async (req, res) => {
  console.log("I Hit this")
  const user_id = req.session.auth.userId;
  // const url = req.headers.referer.split('/');
  // const pageId = url[url.length - 1]
  const { date_due, name, list_id, id } = req.body;

  if (list_id !== 'no changes') {

    const list = await db.list.findOne({
      where: {
        user_id,
        name: list_id
      }
    });

    const newListId = list.id;
    const selectedTask = await db.task.findByPk(Number(id));


    selectedTask.name = name;
    selectedTask.list_id = newListId;
    if (date_due) {
      selectedTask.date_due = date_due;
    }
    await selectedTask.save()



    return res.json({ list_id: newListId.toString(), id });
  } else {
    return res.json({ list_id: '', id, name })
  }
});


// We want to be able to update the tasks 'completed' column in the database for said task id


router.put('/tasks/completed', async (req, res) => {
  const { taskId, completed } = req.body;
  const task = await db.task.findByPk(Number(taskId));
  task.completed = completed;

  await task.save();

  res.json({ completed: task.completed })
})


// Anthony - Brian

// `/home/list/${pageId}/new-task` <--- former action

//search bar


module.exports = router;
