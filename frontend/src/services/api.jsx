import axios from "axios";

const API_URL = "http://localhost:3000/api";

const register = (username, email, password) => {
  return axios.post(`${API_URL}/auth/register`, { username, email, password });
};

const login = (email, password) => {
  return axios.post(`${API_URL}/auth/login`, { email, password });
};

const getGoals = (token) => {
  return axios.get(`${API_URL}/goals`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

const createGoal = (token, goalData) => {
  return axios.post(`${API_URL}/goals`, goalData, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
const getTasks = (token, goalId) => {
  return axios.get(`${API_URL}/tasks/${goalId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

const createTask = (token, taskData) => {
  return axios.post(`${API_URL}/tasks`, taskData, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

const getLogs = (token) => {
  return axios.get(`${API_URL}/logs`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

const logTask = (token, logData) => {
  return axios.post(`${API_URL}/logs`, logData, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

// Add more API methods as needed

export default {
  register,
  login,
  getGoals,
  createGoal,
  getTasks,
  createTask,
  getLogs,
  logTask
};
