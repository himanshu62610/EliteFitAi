Task Management Application

Overview
This is a simple Task Management Application developed as a coding test. The goal of the application is to allow users to manage their tasks effectively by adding, editing, deleting, and filtering tasks based on priority, completion status, and due dates. This application uses local storage to save task data for persistent storage within the browser.

Features
Core Features
Dashboard: Displays lists of tasks organized by upcoming tasks, overdue tasks, and completed tasks.
Task Management: Users can create, edit, and delete tasks. Each task includes:
Title
Description
Due date
Priority level (High, Medium, Low)
Priority Levels: Users can set and update task priorities to help with task organization.
Search and Filter: Allows users to search tasks by keywords and filter tasks based on priority level or completion status.


Technical Specifications
Frontend Framework: Built with React for a clean and responsive user interface.
Local Storage: Utilizes browser's localStorage for storing tasks data locally, enabling persistence across sessions.


Getting Started
Prerequisites
Node.js (version 14 or higher)
npm or yarn


Installation
Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/task-management-app.git
cd task-management-app
Install dependencies:

bash
Copy code
# Using npm
npm install

# Or using yarn
yarn install
Run the application:

bash
Copy code
# Using npm
npm start

# Or using yarn
yarn start
Access the application:

Open your browser and go to http://localhost:3000.

Usage
Dashboard: Upon loading, the dashboard displays tasks categorized as Upcoming, Overdue, or Completed.
Add Task: Create new tasks with a title, description, due date, and priority level.
Edit Task: Modify existing tasks and update details as needed.
Delete Task: Remove tasks from the list permanently.
Search: Quickly locate tasks by entering keywords.
Filter: Filter tasks based on priority (High, Medium, Low) or completion status (Completed, Pending).
Assumptions
Tasks are categorized as Overdue based on their due date.
Tasks data is stored locally within the user's browser using localStorage, allowing task data persistence across browser sessions.
This application is designed for single-user use without backend support, as per the requirements.


Additional Information
For answers to the technical questions posed in the coding test, refer to the Answers to technical questions.md file included in the repository.

License
This project is for educational purposes as part of a coding test and does not include a specific open-source license.