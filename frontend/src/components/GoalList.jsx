import React from 'react';

const GoalList = ({ goals }) => {
  return (
    <div>
      <h2>Goals</h2>
      <ul>
        {goals.map(goal => (
          <li key={goal._id}>
            <h3>{goal.title}</h3>
            <p>{goal.description}</p>
            <p>Min Timeline: {new Date(goal.min_timeline).toLocaleDateString()}</p>
            <p>Max Timeline: {new Date(goal.max_timeline).toLocaleDateString()}</p>
            <p>User Timeline: {new Date(goal.user_timeline).toLocaleDateString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GoalList;
