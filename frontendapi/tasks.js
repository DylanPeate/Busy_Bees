const express = require('express');
const router = express.Router();
const { asyncHandler } = require('../utils')
const db = require('../db/models');
const { task } = db;

router.get('/tasks', async (req, res) => {
  const allTasks = await task.findAll();

  res.json({allTasks})
});



module.exports = router;