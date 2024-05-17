import React from "react";
import api from "../services/api";

const TaskList = ({ tasks, token }) => {
  const handleTaskStatusChange = async (taskId, completed) => {
    try {
      // Call API to update task status
      await api.updateTaskStatus(token, taskId, { completed }); // Update the task status
      // await api.updateTaskStatus(token, taskId, completed);
      // Log the action
      // await api.createLog(token, { message: `Task ${completed}: ${taskId}` });
      await api.createLog(token, { message: `Task ${completed ? 'completed' : 'missed'}: ${taskId}` });
    } catch (error) {
      console.error(error);
      alert("Failed to update task status");
    }
  };

  return (
    <div>
      <h2>Tasks</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>Quantity: {task.quantity}</p>
            <p>Frequency: {task.frequency}</p>
            {task.frequency === "specific_days" && (
              <p>Days: {task.days_of_week.join(", ")}</p>
            )}
            {task.reminder && typeof task.reminder === "object" && (
              <p>Reminder: {task.reminder.enabled.toString()}</p>
            )}
            <button
             onClick={() => handleTaskStatusChange(task._id, true)} // Mark as completed
            >
              Mark Completed
            </button>
            <button
             onClick={() => handleTaskStatusChange(task._id, false)} // Mark as missed
            >
              Mark Missed
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
