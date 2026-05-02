const mongoose = require('mongoose');

const assignmentSchema = new mongoose.Schema(
  {
    title: { type: String, required: [true, 'Title is required'], trim: true },
    subject: { type: String, required: [true, 'Subject is required'], trim: true },
    description: { type: String, required: [true, 'Description is required'], trim: true },
    dueDate: { type: Date, required: [true, 'Due date is required'] },
    status: { type: String, enum: ['active', 'closed'], default: 'active' },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Assignment', assignmentSchema);