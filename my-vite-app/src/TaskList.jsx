import React, { useState } from "react";

function TaskList({ tasks, onToggleTask, onDeleteTask, onEditTask }) {
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editedTitle, setEditedTitle] = useState("");
  const [editedDescription, setEditedDescription] = useState("");
  const [editedDueDate, setEditedDueDate] = useState("");
  const [editedPriority, setEditedPriority] = useState("Low");

  const handleEditClick = (task) => {
    setEditingTaskId(task.id);
    setEditedTitle(task.title);
    setEditedDescription(task.description);
    setEditedDueDate(task.dueDate);
    setEditedPriority(task.priority);
  };

  const handleSaveClick = (task) => {
    const updatedTask = {
      ...task,
      title: editedTitle,
      description: editedDescription,
      dueDate: editedDueDate,
      priority: editedPriority,
    };

    onEditTask(updatedTask);  // Pass updated task to the parent
    setEditingTaskId(null);  // Exit edit mode
  };

  const handleCancelClick = () => {
    setEditingTaskId(null);  // Exit edit mode without saving
  };

  // Sorting tasks by priority: High, Medium, Low
  const sortedTasks = tasks.sort((a, b) => {
    const priorityOrder = { High: 3, Medium: 2, Low: 1 };
    return priorityOrder[b.priority] - priorityOrder[a.priority];
  });

  // Priority text color mapping
  const priorityTextColors = {
    Low: "text-green-500",
    Medium: "text-yellow-500",
    High: "text-red-500",
  };

  return (
    <div className="bg-gray-100 p-6">
      {/* If no tasks */}
      {tasks.length === 0 ? (
        <div className="text-center text-2xl text-gray-700">No tasks available</div>
      ) : (
        sortedTasks.map((task) => (
          <div
            key={task.id}
            className={`p-6 bg-white rounded-lg shadow-lg mb-6 ${task.completed ? "bg-green-100" : ""} transition-transform transform hover:scale-105`}
          >
            <div className="flex items-start space-x-4">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => onToggleTask(task.id)}
                className="transform scale-150 mr-4 mt-2" // Bigger checkbox and slightly lower
              />
              <div className="flex flex-col space-y-2 w-full">
                {editingTaskId === task.id ? (
                  <>
                    <input
                      type="text"
                      value={editedTitle}
                      onChange={(e) => setEditedTitle(e.target.value)}
                      className="w-full p-4 mb-4 border-2 rounded-md focus:ring-2 focus:ring-indigo-500 text-2xl"
                      placeholder="Task Title"
                    />
                    <textarea
                      value={editedDescription}
                      onChange={(e) => setEditedDescription(e.target.value)}
                      className="w-full p-4 mb-4 border-2 rounded-md focus:ring-2 focus:ring-indigo-500 text-xl"
                      placeholder="Task Description"
                    />
                    <input
                      type="date"
                      value={editedDueDate}
                      onChange={(e) => setEditedDueDate(e.target.value)}
                      className="w-full p-4 mb-4 border-2 rounded-md focus:ring-2 focus:ring-indigo-500 text-xl"
                    />
                    <select
                      value={editedPriority}
                      onChange={(e) => setEditedPriority(e.target.value)}
                      className="w-full p-4 mb-4 border-2 rounded-md focus:ring-2 focus:ring-indigo-500 text-xl"
                    >
                      <option value="High">High</option>
                      <option value="Medium">Medium</option>
                      <option value="Low">Low</option>
                    </select>
                  </>
                ) : (
                  <>
                    <h3
                      className={`text-3xl font-semibold ${task.completed ? "line-through text-gray-500" : ""}`}
                    >
                      {task.title}
                    </h3>
                    <p
                      className={`text-xl text-gray-700 ${task.completed ? "line-through text-gray-500" : ""}`}
                    >
                      {task.description || "No description provided"}
                    </p>
                    <p
                      className={`text-xl text-gray-600 ${task.completed ? "line-through text-gray-500" : ""}`}
                    >
                      <span className="font-bold">Due:</span> {task.dueDate || "No due date"}
                    </p>
                    <p
                      className={`text-xl ${task.completed ? "line-through text-gray-500" : ""}`}
                    >
                      <span className="font-bold">Priority:</span>{" "}
                      <span className={`${priorityTextColors[task.priority]}`}>{task.priority}</span>
                    </p>
                  </>
                )}
              </div>
            </div>

            <div className="mt-6 flex justify-between">
              {editingTaskId === task.id ? (
                <>
                  <button
                    onClick={() => handleSaveClick(task)}
                    className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none text-2xl"
                  >
                    Save
                  </button>
                  <button
                    onClick={handleCancelClick}
                    className="px-6 py-3 bg-gray-400 text-white rounded-lg hover:bg-gray-500 focus:outline-none text-2xl"
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => handleEditClick(task)}
                    disabled={task.completed}
                    className={`px-6 py-3 text-white rounded-lg ${task.completed ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500"} text-2xl`}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDeleteTask(task.id)}
                    className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none text-2xl"
                  >
                    Delete
                  </button>
                </>
              )}
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default TaskList;
