import React, { useState } from 'react';
import api from '../services/api';

const LogForm = ({ token, taskId, fetchLogs }) => {
  const [status, setStatus] = useState('completed');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.logTask(token, { task_id: taskId, status });
      fetchLogs();
    } catch (error) {
      alert('Failed to log task');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="completed">Completed</option>
        <option value="missed">Missed</option>
      </select>
      <button type="submit">Log Task</button>
    </form>
  );
};

export default LogForm;
