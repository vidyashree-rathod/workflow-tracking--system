const Submission = require('../models/submission.model');
const { getAssignmentById } = require('./assignment.service');

// Create a submission after validating assignment rules
const createSubmission = async (assignmentId, data) => {
  // 1. Check assignment exists
  const assignment = await getAssignmentById(assignmentId);
  if (!assignment) {
    throw new Error('Assignment not found');
  }

  // 2. Check if assignment is active
  if (assignment.status === 'closed') {
    throw new Error('Submission rejected: Assignment is closed');
  }

  // 3. Check if due date has passed
  const now = new Date();
  if (new Date(assignment.dueDate) < now) {
    throw new Error('Submission rejected: Deadline has passed');
  }

  // 4. Bonus: Prevent duplicate submissions from same student
  const duplicate = await Submission.findOne({
    assignmentId,
    studentName: data.studentName,
  });
  if (duplicate) {
    throw new Error('You have already submitted this assignment');
  }

  const submission = await Submission.create({ assignmentId, ...data });
  return submission;
};

// Get all submissions for a specific assignment
const getSubmissionsByAssignment = async (assignmentId) => {
  const assignment = await getAssignmentById(assignmentId);
  if (!assignment) {
    throw new Error('Assignment not found');
  }
  const submissions = await Submission.find({ assignmentId }).sort({
    submittedAt: -1,
  });
  return { assignment, submissions, count: submissions.length };
};

module.exports = { createSubmission, getSubmissionsByAssignment };