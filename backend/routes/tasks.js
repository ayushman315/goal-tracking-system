const express = require('express');
const Task = require('../models/Task');
const Goal = require('../models/Goal');
const authenticateJWT = require('../middleware/auth');
const router = express.Router();

router.post('/', authenticateJWT, async (req, res) => {
  const { goal_id, title, description, quantity, frequency, days_of_week, reminder } = req.body;

  try {
    const goal = await Goal.findById(goal_id);
    if (!goal || goal.user_id.toString() !== req.user.id) {
      return res.status(404).json({ msg: 'Goal not found' });
    }

    const task = new Task({
      goal_id,
      title,
      description,
      quantity,
      frequency,
      days_of_week,
      reminder
    });

    await task.save();
    res.json(task);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

router.get('/:goalId', authenticateJWT, async (req, res) => {
  try {
    const tasks = await Task.find({ goal_id: req.params.goalId });
    res.json(tasks);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// Update task status route
router.put('/:taskId', authenticateJWT, async (req, res) => {
  const { completed } = req.body;
  
  try {
    const task = await Task.findById(req.params.taskId);
    if (!task) {
      return res.status(404).json({ msg: 'Task not found' });
    }

    const goal = await Goal.findById(task.goal_id);
    if (!goal || goal.user_id.toString() !== req.user.id) {
      return res.status(404).json({ msg: 'Goal not found' });
    }

    task.completed = completed !== undefined ? completed : task.completed;
    await task.save();
    
    res.json(task);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});


router.delete('/:taskId', authenticateJWT, async (req, res) => {
  try {
    const task = await Task.findById(req.params.taskId);
    if (!task) {
      return res.status(404).json({ msg: 'Task not found' });
    }

    const goal = await Goal.findById(task.goal_id);
    if (!goal || goal.user_id.toString() !== req.user.id) {
      return res.status(404).json({ msg: 'Goal not found' });
    }

    await task.remove();
    res.json({ msg: 'Task removed' });
  } catch (err) {
    res.status(500).send('Server error');
  }
});

module.exports = router;
