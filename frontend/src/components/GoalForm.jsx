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
      await api.createGoal(token, formData);
      fetchGoals();
    } catch (error) {
      alert('Failed to create goal');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" placeholder="Title" onChange={handleChange} />
      <textarea name="description" placeholder="Description" onChange={handleChange}></textarea>
      <input type="date" name="min_timeline" onChange={handleChange} />
      <input type="date" name="max_timeline" onChange={handleChange} />
      <input type="date" name="user_timeline" onChange={handleChange} />
      <button type="submit">Create Goal</button>
    </form>
  );
};

export default GoalForm;
