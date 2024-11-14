import React, { useState } from "react";

function SearchPage({ tasks }) {
  const [searchText, setSearchText] = useState("");
  const [priorityFilter, setPriorityFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  const handlePriorityChange = (e) => {
    setPriorityFilter(e.target.value);
  };

  const handleStatusChange = (e) => {
    setStatusFilter(e.target.value);
  };

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch = task.title.toLowerCase().includes(searchText.toLowerCase());
    const matchesPriority = priorityFilter === "All" || task.priority === priorityFilter;
    const matchesStatus =
      statusFilter === "All" ||
      (statusFilter === "Completed" && task.completed) ||
      (statusFilter === "Incomplete" && !task.completed);

    return matchesSearch && matchesPriority && matchesStatus;
  });

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-4xl font-bold text-indigo-700 mb-8 text-center">Search Tasks</h2>

      {/* Search Box Section */}
      <div className="flex items-center justify-center space-x-6 mb-8">
        {/* Search Box */}
        <div className="flex items-center w-full max-w-4xl bg-white p-4 rounded-full border border-gray-300 shadow-md">
          {/* Search Input */}
          <input
            type="text"
            placeholder="Search tasks..."
            value={searchText}
            onChange={handleSearchChange}
            className="w-full p-3 rounded-l-full border-0 outline-none focus:ring-2 focus:ring-indigo-500"
          />
          
          {/* Priority Dropdown */}
          <select
            value={priorityFilter}
            onChange={handlePriorityChange}
            className="p-3 rounded-r-full border-l border-gray-300 focus:ring-2 focus:ring-indigo-500"
          >
            <option value="All">All Priorities</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>

          {/* Status Dropdown */}
          <select
            value={statusFilter}
            onChange={handleStatusChange}
            className="p-3 rounded-r-full border-l border-gray-300 focus:ring-2 focus:ring-indigo-500"
          >
            <option value="All">All Statuses</option>
            <option value="Completed">Completed</option>
            <option value="Incomplete">Incomplete</option>
          </select>
        </div>
      </div>

      {/* Filtered Tasks Display */}
      <ul className="space-y-6 max-w-4xl mx-auto">
        {filteredTasks.length === 0 ? (
          <p className="text-center text-gray-500">No tasks match your search criteria.</p>
        ) : (
          filteredTasks.map((task) => (
            <li
              key={task.id}
              className="bg-white p-6 shadow-md hover:shadow-xl transition-shadow duration-200"
            >
              <div className="flex justify-between items-start space-x-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-indigo-700">{task.title}</h3>
                  <p className="text-lg text-gray-600 mt-2">{task.description}</p>

                  <div className="mt-4 text-gray-700">
                    <p className="text-sm mb-2">
                      <span className="font-semibold text-indigo-600">Priority:</span> {task.priority}
                    </p>
                    <p className="text-sm mb-2">
                      <span className="font-semibold text-indigo-600">Due Date:</span> {task.dueDate}
                    </p>
                    <p className="text-sm">
                      <span className="font-semibold text-indigo-600">Status:</span> {task.completed ? "Completed" : "Incomplete"}
                    </p>
                  </div>
                </div>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default SearchPage;
