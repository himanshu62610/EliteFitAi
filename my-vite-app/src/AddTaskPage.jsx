// src/AddTaskPage.jsx
import React from "react";
import TaskForm from "./TaskForm";

function AddTaskPage({ onAddTask }) {
  return (
    <div>
      <TaskForm onAddTask={onAddTask} />
    </div>
  );
}

export default AddTaskPage;
