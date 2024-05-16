const express = require('express');
const Log = require('../models/Log');
const Task = require('../models/Task');
const authenticateJWT = require('../middleware/auth');
const router = express.Router();

router.post('/', authenticateJWT, async (req, res) => {
  const { task_id, status } = req.body;

  try {
    const task = await Task.findById(task_id);
    if (!task) {
      return res.status(404).json({ msg: 'Task not found' });
    }

    const log = new Log({
      user_id: req.user.id,
      task_id,
      status
    });

    await log.save();
    res.json(log);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

router.get('/', authenticateJWT, async (req, res) => {
  try {
    const logs = await Log.find({ user_id: req.user.id });
    res.json(logs);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

module.exports = router;
