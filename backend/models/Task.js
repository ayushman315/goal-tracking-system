const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  goal_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Goal",
    required: true,
  },
  title: { type: String, required: true },
  description: { type: String },
  quantity: { type: Number, required: true },
  frequency: { type: String, required: true }, // e.g., "daily", "twice a day", "weekly"
  days_of_week: [{ type: String }], // e.g., ["Monday", "Wednesday"]
  reminder: {
    enabled: { type: Boolean, default: false },
    time: { type: Date },
  },
  completed: {
    type: Boolean,
    default: false,
  },

  created_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Task", TaskSchema);
