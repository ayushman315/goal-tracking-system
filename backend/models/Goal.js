const mongoose = require('mongoose');
// goal schema
const GoalSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  description: { type: String },
  min_timeline: { type: Date, required: true },
  max_timeline: { type: Date, required: true },
  user_timeline: { type: Date, required: true },
  created_at: { type: Date, default: Date.now }
});
// exporting goal schema

module.exports = mongoose.model('Goal', GoalSchema);
