const assignmentService = require('../services/assignment.service');

const createAssignment = async (req, res) => {
  try {
    const { title, subject, description, dueDate } = req.body;
    if (!title || !subject || !description || !dueDate)
      return res.status(400).json({ success: false, message: 'All fields are required' });
    const assignment = await assignmentService.createAssignment({ title, subject, description, dueDate });
    res.status(201).json({ success: true, message: 'Assignment created', data: assignment });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const getAllAssignments = async (req, res) => {
  try {
    const assignments = await assignmentService.getAllAssignments(req.query);
    res.status(200).json({ success: true, count: assignments.length, data: assignments });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const getAssignmentById = async (req, res) => {
  try {
    const assignment = await assignmentService.getAssignmentById(req.params.id);
    if (!assignment) return res.status(404).json({ success: false, message: 'Assignment not found' });
    res.status(200).json({ success: true, data: assignment });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const updateAssignment = async (req, res) => {
  try {
    const assignment = await assignmentService.updateAssignment(req.params.id, req.body);
    if (!assignment) return res.status(404).json({ success: false, message: 'Assignment not found' });
    res.status(200).json({ success: true, message: 'Assignment updated', data: assignment });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const deleteAssignment = async (req, res) => {
  try {
    const result = await assignmentService.deleteAssignment(req.params.id);
    if (!result) return res.status(404).json({ success: false, message: 'Assignment not found' });
    res.status(200).json({ success: true, message: 'Assignment deleted successfully' });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = { createAssignment, getAllAssignments, getAssignmentById, updateAssignment, deleteAssignment };