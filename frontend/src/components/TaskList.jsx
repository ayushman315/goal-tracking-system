import React from "react";

const TaskList = ({ tasks }) => {
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
        {task.reminder && typeof task.reminder === 'object' && (
  <p>Reminder: {task.reminder.enabled.toString()}</p>
)}


          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
