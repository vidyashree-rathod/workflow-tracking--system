/**
 * Checks if the assignment's due date has passed.
 * If yes, updates the status to 'closed' in DB and returns updated doc.
 */
const Assignment = require('../models/assignment.model');

const checkAndUpdateStatus = async (assignment) => {
  const now = new Date();
  if (assignment.status === 'active' && new Date(assignment.dueDate) < now) {
    assignment.status = 'closed';
    await assignment.save();
  }
  return assignment;
};

module.exports = { checkAndUpdateStatus };