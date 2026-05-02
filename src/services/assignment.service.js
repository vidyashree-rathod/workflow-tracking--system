const Assignment = require('../models/assignment.model');
const Submission = require('../models/submission.model');
const { checkAndUpdateStatus } = require('../utils/statusChecker');

// Create a new assignment (status defaults to 'active')
const createAssignment = async (data) => {
  const assignment = await Assignment.create(data);
  return assignment;
};

// Get all assignments, auto-check & update status on each
const getAllAssignments = async (query = {}) => {
  const filter = {};

  // Optional: filter by status or subject (bonus)
  if (query.status) filter.status = query.status;
  if (query.subject) filter.subject = new RegExp(query.subject, 'i');

  // Optional: sort by dueDate (bonus)
  const sort = query.sortBy === 'dueDate' ? { dueDate: 1 } : { createdAt: -1 };

  const assignments = await Assignment.find(filter).sort(sort);

  // Auto-update status for each
  const updated = await Promise.all(
    assignments.map((a) => checkAndUpdateStatus(a))
  );
  return updated;
};

// Get a single assignment by ID
const getAssignmentById = async (id) => {
  const assignment = await Assignment.findById(id);
  if (!assignment) return null;
  return checkAndUpdateStatus(assignment);
};

// Update assignment fields
const updateAssignment = async (id, data) => {
  const assignment = await Assignment.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });
  return assignment;
};

// Delete assignment (only if no submissions exist - bonus guard)
const deleteAssignment = async (id) => {
  const submissionCount = await Submission.countDocuments({ assignmentId: id });
  if (submissionCount > 0) {
    throw new Error('Cannot delete assignment that has submissions');
  }
  return Assignment.findByIdAndDelete(id);
};

module.exports = {
  createAssignment,
  getAllAssignments,
  getAssignmentById,
  updateAssignment,
  deleteAssignment,
};