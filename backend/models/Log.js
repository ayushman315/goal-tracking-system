const mongoose = require('mongoose');
// log schema`
const LogSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  task_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Task', required: true },
  timestamp: { type: Date, default: Date.now },
  status: { type: String, required: true } // e.g., "completed", "missed"
});
// exporting log schema
module.exports = mongoose.model('Log', LogSchema);
