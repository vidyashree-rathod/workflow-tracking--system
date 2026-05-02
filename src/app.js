const express = require('express');
const logger = require('./middleware/logger.middleware');
const assignmentRoutes = require('./routes/assignment.routes');

const app = express();

app.use(express.json());
app.use(logger);
app.use('/api/assignments', assignmentRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'Workflow Tracking System is running' });
});

app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Route not found' });
});

module.exports = app;