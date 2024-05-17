import React, { useState, useEffect } from 'react';
import api from '../services/api';
import GoalForm from './GoalForm';
import GoalList from './GoalList';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import LogForm from './LogForm';
import LogList from './LogList';
// import"../"

const Dashboard = ({ token }) => {
  const [goals, setGoals] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [logs, setLogs] = useState([]);
  const [selectedGoalId, setSelectedGoalId] = useState(null);

  const fetchGoals = async () => {
    try {
      const response = await api.getGoals(token);
      setGoals(response.data);
    } catch (error) {
      alert('Failed to fetch goals');
    }
  };

  const fetchTasks = async (goalId) => {
    try {
      const response = await api.getTasks(token, goalId);
      setTasks(response.data);
    } catch (error) {
      alert('Failed to fetch tasks');
    }
  };

  const fetchLogs = async () => {
    try {
      const response = await api.getLogs(token);
      setLogs(response.data);
    } catch (error) {
    console.error(error);
      alert('Failed to fetch logs');
    }
  };
  const handleGoalSelect = (goalId) => {
    setSelectedGoalId(goalId);
    fetchTasks(goalId);
  };


  useEffect(() => {
    fetchGoals();
    fetchLogs();
  }, [token]);

  return (
    <div>
      <h1>Dashboard</h1>
      <GoalForm token={token} fetchGoals={fetchGoals} />
      <GoalList goals={goals} onSelectGoal={handleGoalSelect}  />
      {selectedGoalId && (
        <>
          <TaskForm token={token} goalId={selectedGoalId} fetchTasks={() => fetchTasks(selectedGoalId)} />
          <TaskList tasks={tasks} />
        </>
      )}
      <LogForm token={token} fetchLogs={fetchLogs} />
      <LogList logs={logs} />
    </div>
  );
};

export default Dashboard;
