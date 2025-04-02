** In Progress **
# Task Tracker

A simple task management app with user accounts, built with Node.js and MongoDB.

## Features
- Create, edit, and delete tasks
- User login/registration
- Mark tasks as complete
- Filter tasks by status

## Setup

1. Make sure you have:
   - Node.js (v18 or newer)
   - MongoDB (local or Atlas)
2. Install dependencies:
```bash
npm install
```
3. Install needed packages:
```bash
npm install express mongoose dotenv
```
4. Create a .env file:
```bash
touch .env
```
5. Add your MongoDB connection to .env:
```bash
MONGODB_URI=mongodb://localhost:27017/task_tracker
```

## Running the App

Start the server:
```bash
npm run dev
```

Open in your browser:
```bash
http://localhost:3000
```

Project Structure
controllers/ - Handles task and user logic
models/ - Database models
index.js - Main application setup
