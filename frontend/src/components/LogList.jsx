import React from 'react';

const LogList = ({ logs }) => {
  return (
    <div>
      <h2>Logs</h2>
      <ul>
        {logs.map(log => (
          <li key={log._id}>
            <p>Task ID: {log.task_id}</p>
            <p>Status: {log.status}</p>
            <p>Timestamp: {new Date(log.timestamp).toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LogList;
