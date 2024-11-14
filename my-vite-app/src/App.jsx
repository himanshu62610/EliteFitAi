import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HomePage from "./HomePage";
import AddTaskPage from "./AddTaskPage";
import SearchPage from "./SearchPage";

function App() {
  const [tasks, setTasks] = useState([]);

  // Load tasks from localStorage when component mounts

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    console.log("Loaded tasks from localStorage:", savedTasks);
    setTasks(savedTasks);
  }, []); // This will run only once when the component mounts

  
  // Save tasks to localStorage whenever tasks state changes
  useEffect(() => {
    if (tasks.length > 0) {
      console.log("Saving tasks to localStorage:", tasks);
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks]); // This will run every time tasks state changes


  // Add a task
  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: Date.now(), completed: false }]);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  // Delete a task
  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  // Toggle task completion status
  const toggleTaskCompletion = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Edit a task
  const updateTask = (updatedTask) => {
    setTasks(
      tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-100 p-6">
      <nav className="flex justify-center space-x-6 bg-white p-4 rounded-md shadow-md mb-6">
  <Link
    to="/"
    className="text-black font-semibold px-4 py-2 rounded-lg hover:bg-gray-200 hover:text-gray-900 transition duration-200"
  >
    Dashboard
  </Link>
  <Link
    to="/add-task"
    className="text-black font-semibold px-4 py-2 rounded-lg hover:bg-gray-200 hover:text-gray-900 transition duration-200"
  >
    Add Task
  </Link>
  <Link
    to="/search"
    className="text-black font-semibold px-4 py-2 rounded-lg hover:bg-gray-200 hover:text-gray-900 transition duration-200"
  >
    Search
  </Link>
</nav>

        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                tasks={tasks}
                onToggleTask={toggleTaskCompletion}  // Pass this prop correctly
                onDeleteTask={deleteTask}             // Pass this prop correctly
                onEditTask={updateTask}               // Pass this prop correctly
              />
            }
          />
          <Route
            path="/add-task"
            element={<AddTaskPage onAddTask={addTask} />}
          />
          <Route
            path="/search"
            element={
              <SearchPage
                tasks={tasks}
                onToggleTask={toggleTaskCompletion}  // Pass this prop correctly
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
