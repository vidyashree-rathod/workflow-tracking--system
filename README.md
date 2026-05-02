# Workflow Tracking System

A backend-based Workflow Tracking System built using Node.js, Express.js, and MongoDB. This project helps manage assignments, submissions, workflow tracking, and status monitoring in an organized manner.

---

# Features

* Create and manage assignments
* Submit workflow tasks or assignments
* Track submission status
* Middleware logging support
* Service-based architecture
* MongoDB database integration
* Organized folder structure
* REST API support

---

# Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* JavaScript

---

# Project Structure

```text
workflow-tracking-system/
│
├── src/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── assignment.controller.js
│   │   └── submission.controller.js
│   ├── middleware/
│   │   └── logger.middleware.js
│   ├── models/
│   │   ├── assignment.model.js
│   │   └── submission.model.js
│   ├── routes/
│   ├── services/
│   │   ├── assignment.service.js
│   │   └── submission.service.js
│   ├── utils/
│   │   └── statusChecker.js
│   ├── app.js
│   └── server.js
│
├── .env
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

---

# Installation

## Step 1: Clone Repository

```bash
git clone https://github.com/vidyashree-rathod/workflow-tracking--system.git
```

## Step 2: Open Project Folder

```bash
cd workflow-tracking-system
```

## Step 3: Install Dependencies

```bash
npm install
```

---

# Environment Variables

Create a `.env` file in the root folder.

Example:

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/workflow_tracking
```

---

# Run the Project

```bash
npm start
```

Or for development:

```bash
npm run dev
```

---

# API Modules

### Assignment Module

* Create assignment
* Update assignment
* Delete assignment
* Get assignment details

### Submission Module

* Submit assignment
* Track submission status
* View submission records

---

# Example API Routes

```text
POST   /assignments
GET    /assignments
POST   /submissions
GET    /submissions
```

---

# Future Improvements

* Authentication system
* User roles (Admin/User)
* Dashboard integration
* Notification system
* File upload support

---

# Author

Created by Vidyashree Rathod

---

# License

This project is for educational and learning purposes.
