// auth.js - Auth service for handling token storage and retrieval

// Function to store the token in localStorage
export const storeToken = (token) => {
    localStorage.setItem('token', token);
  };
  
  // Function to retrieve the token from localStorage
  export const getToken = () => {
    return localStorage.getItem('token');
  };
  
  // Function to remove the token from localStorage
  export const removeToken = () => {
    localStorage.removeItem('token');
  };
  