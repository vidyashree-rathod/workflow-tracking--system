const submissionService = require('../services/submission.service');

const createSubmission = async (req, res) => {
  try {
    const { studentName, content } = req.body;
    if (!studentName || !content)
      return res.status(400).json({ success: false, message: 'studentName and content are required' });
    const submission = await submissionService.createSubmission(req.params.id, { studentName, content });
    res.status(201).json({ success: true, message: 'Submission created successfully', data: submission });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const getSubmissions = async (req, res) => {
  try {
    const result = await submissionService.getSubmissionsByAssignment(req.params.id);
    res.status(200).json({ success: true, ...result });
  } catch (error) {
    res.status(404).json({ success: false, message: error.message });
  }
};

module.exports = { createSubmission, getSubmissions };