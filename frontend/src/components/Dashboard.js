import React, { useState, useEffect } from 'react';
import api from '../services/api';
import GoalForm from './GoalForm';
import GoalList from './GoalList';

const Dashboard = ({ token }) => {
  const [goals, setGoals] = useState([]);

  const fetchGoals = async () => {
    try {
      const response = await api.getGoals(token);
      setGoals(response.data);
    } catch (error) {
      alert('Failed to fetch goals');
    }
  };

  useEffect(() => {
    fetchGoals();
  }, [token]);

  return (
    <div>
      <h1>Dashboard</h1>
      <GoalForm token={token} fetchGoals={fetchGoals} />
      <GoalList goals={goals} />
    </div>
  );
};

export default Dashboard;
