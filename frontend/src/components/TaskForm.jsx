import React, { useState } from 'react';
import api from '../services/api';

const TaskForm = ({ token, goalId, fetchTasks }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    quantity: 1,
    frequency: 'daily',
    days_of_week: [],
    reminder: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDaysOfWeekChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData({ ...formData, days_of_week: [...formData.days_of_week, value] });
    } else {
      setFormData({ ...formData, days_of_week: formData.days_of_week.filter(day => day !== value) });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.createTask(token, { ...formData, goal_id: goalId });

      fetchTasks();
      
    } catch (error) {
      alert('Failed to create task');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" placeholder="Title" onChange={handleChange} />
      <textarea name="description" placeholder="Description" onChange={handleChange}></textarea>
      <input type="number" name="quantity" placeholder="Quantity" value={formData.quantity} onChange={handleChange} />

<select name="frequency" value={formData.frequency} onChange={handleChange}>
  <option value="daily">Daily</option>
  <option value="twice_a_day">Twice a Day</option>
  <option value="specific_days">Specific Days</option>
  <option value="weekly">Weekly</option>
</select>

{formData.frequency === 'specific_days' && (
  <div>
    <label>
      <input type="checkbox" value="Monday" onChange={handleDaysOfWeekChange} />
      Monday
    </label>
    <label>
      <input type="checkbox" value="Tuesday" onChange={handleDaysOfWeekChange} />
      Tuesday
    </label>
    <label>
      <input type="checkbox" value="Wednesday" onChange={handleDaysOfWeekChange} />
      Wednesday
    </label>
    <label>
      <input type="checkbox" value="Thursday" onChange={handleDaysOfWeekChange} />
      Thursday
    </label>
    <label>
      <input type="checkbox" value="Friday" onChange={handleDaysOfWeekChange} />
      Friday
    </label>
    <label>
      <input type="checkbox" value="Saturday" onChange={handleDaysOfWeekChange} />
      Saturday
    </label>
    <label>
      <input type="checkbox" value="Sunday" onChange={handleDaysOfWeekChange} />
      Sunday
    </label>
  </div>
)}

<input type="time" name="reminder" value={formData.reminder} onChange={handleChange} placeholder="Reminder Time" />

<button type="submit">Create Task</button>
</form>
);
};

export default TaskForm;

