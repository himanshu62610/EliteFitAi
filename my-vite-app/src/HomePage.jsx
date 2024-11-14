import React, { useState } from "react";
import TaskList from "./TaskList";

function HomePage({ tasks, onToggleTask, onDeleteTask, onEditTask }) {
  const [showUpcoming, setShowUpcoming] = useState(false);
  const [showOverdue, setShowOverdue] = useState(false);
  const [showCompleted, setShowCompleted] = useState(false);

  const upcomingTasks = tasks.filter((task) => !task.completed && new Date(task.dueDate) > new Date());
  const overdueTasks = tasks.filter((task) => !task.completed && new Date(task.dueDate) < new Date());
  const completedTasks = tasks.filter((task) => task.completed);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center pt-8">
      {/* Task Manager Heading */}
      <h2 className="text-4xl font-bold text-indigo-700 mb-8 text-center">Task Manager</h2>

      {/* Upcoming Tasks Section */}
      <div className="w-full max-w-4xl mb-8 mt-20">
        <div
          className="cursor-pointer flex justify-between items-center p-4 bg-indigo-600 text-white rounded-t-lg"
          onClick={() => setShowUpcoming(!showUpcoming)}
        >
          <h3 className="text-2xl font-semibold text-center w-full">Upcoming Tasks</h3>
          <span>{showUpcoming ? "−" : "+"}</span>
        </div>
        {showUpcoming && (
          <div className="p-4">
            <TaskList
              tasks={upcomingTasks}
              onToggleTask={onToggleTask}
              onDeleteTask={onDeleteTask}
              onEditTask={onEditTask}
            />
          </div>
        )}
      </div>

      {/* Overdue Tasks Section */}
      <div className="w-full max-w-4xl mb-8">
        <div
          className="cursor-pointer flex justify-between items-center p-4 bg-indigo-600 text-white rounded-t-lg"
          onClick={() => setShowOverdue(!showOverdue)}
        >
          <h3 className="text-2xl font-semibold text-center w-full">Overdue Tasks</h3>
          <span>{showOverdue ? "−" : "+"}</span>
        </div>
        {showOverdue && (
          <div className="p-4">
            <TaskList
              tasks={overdueTasks}
              onToggleTask={onToggleTask}
              onDeleteTask={onDeleteTask}
              onEditTask={onEditTask}
            />
          </div>
        )}
      </div>

      {/* Completed Tasks Section */}
      <div className="w-full max-w-4xl mb-8">
        <div
          className="cursor-pointer flex justify-between items-center p-4 bg-indigo-600 text-white rounded-t-lg"
          onClick={() => setShowCompleted(!showCompleted)}
        >
          <h3 className="text-2xl font-semibold text-center w-full">Completed Tasks</h3>
          <span>{showCompleted ? "−" : "+"}</span>
        </div>
        {showCompleted && (
          <div className="p-4">
            <TaskList
              tasks={completedTasks}
              onToggleTask={onToggleTask}
              onDeleteTask={onDeleteTask}
              onEditTask={onEditTask}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default HomePage;
