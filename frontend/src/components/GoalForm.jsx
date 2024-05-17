import React, { useState } from 'react';
import api from '../services/api';

const GoalForm = ({ token, fetchGoals }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    min_timeline: '',
    max_timeline: '',
    user_timeline: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.createGoal(token, formData);
      console.log(response.data); // handle the response as needed
      fetchGoals();
    } catch (error) {
      console.log(response.data); // handle the response as needed
      console.error(error);
      alert('Failed to create goal');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" placeholder="Title" onChange={handleChange} />
      <textarea name="description" placeholder="Description" onChange={handleChange}></textarea>
      <p>Min Timeline</p>
      <input type="date" name="min_timeline" onChange={handleChange} />
      <p>Max Timeline</p>
      <input type="date" name="max_timeline" onChange={handleChange} />
      <p>User Timeline</p>
      <input type="date" name="user_timeline" onChange={handleChange} />
      <button type="submit">Create Goal</button>
    </form>
  );
};

export default GoalForm;
