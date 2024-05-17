const express = require('express');
const Goal = require('../models/Goal');
const authenticateJWT = require('../middleware/auth');
const router = express.Router();

router.post('/', authenticateJWT, async (req, res) => {
  const { title, description, min_timeline, max_timeline, user_timeline } = req.body;

  try {
    const goalCount = await Goal.countDocuments({ user_id: req.user.id });
    if (goalCount >= 5) {
      return res.status(400).json({ msg: 'User can only have up to 2 goals' });
    }

    const goal = new Goal({
      user_id: req.user.id,
      title,
      description,
      min_timeline,
      max_timeline,
      user_timeline
    });

    await goal.save();
    res.json(goal);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

router.get('/', authenticateJWT, async (req, res) => {
  try {
    const goals = await Goal.find({ user_id: req.user.id });
    res.json(goals);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

router.put('/:goalId', authenticateJWT, async (req, res) => {
  const { title, description, min_timeline, max_timeline, user_timeline } = req.body;

  try {
    const goal = await Goal.findById(req.params.goalId);
    if (!goal || goal.user_id.toString() !== req.user.id) {
      return res.status(404).json({ msg: 'Goal not found' });
    }

    goal.title = title || goal.title;
    goal.description = description || goal.description;
    goal.min_timeline = min_timeline || goal.min_timeline;
    goal.max_timeline = max_timeline || goal.max_timeline;
    goal.user_timeline = user_timeline || goal.user_timeline;

    await goal.save();
    res.json(goal);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

router.delete('/:goalId', authenticateJWT, async (req, res) => {
  try {
    const goal = await Goal.findById(req.params.goalId);
    if (!goal || goal.user_id.toString() !== req.user.id) {
      return res.status(404).json({ msg: 'Goal not found' });
    }

    await goal.remove();
    res.json({ msg: 'Goal removed' });
  } catch (err) {
    res.status(500).send('Server error');
  }
});

module.exports = router;
