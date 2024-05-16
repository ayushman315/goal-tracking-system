import axios from 'axios';

const API_URL = 'http://localhost:6000/api';

const register = (username, email, password) => {
  return axios.post(`${API_URL}/auth/register`, { username, email, password });
};

const login = (email, password) => {
  return axios.post(`${API_URL}/auth/login`, { email, password });
};

const getGoals = (token) => {
  return axios.get(`${API_URL}/goals`, {
    headers: { 'Authorization': `Bearer ${token}` }
  });
};

const createGoal = (token, goalData) => {
  return axios.post(`${API_URL}/goals`, goalData, {
    headers: { 'Authorization': `Bearer ${token}` }
  });
};

// Add more API methods as needed

export default {
  register,
  login,
  getGoals,
  createGoal
};
