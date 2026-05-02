const express = require('express');
const router = express.Router();
const assignmentController = require('../controllers/assignment.controller');
const submissionController = require('../controllers/submission.controller');

router.post('/', assignmentController.createAssignment);
router.get('/', assignmentController.getAllAssignments);
router.get('/:id', assignmentController.getAssignmentById);
router.put('/:id', assignmentController.updateAssignment);
router.delete('/:id', assignmentController.deleteAssignment);

router.post('/:id/submissions', submissionController.createSubmission);
router.get('/:id/submissions', submissionController.getSubmissions);

module.exports = router;