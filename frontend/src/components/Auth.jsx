import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';

const Auth = ({ setToken }) => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div>
      <button onClick={() => setIsLogin(true)}>Login</button>
      <button onClick={() => setIsLogin(false)}>Register</button>
      {isLogin ? <Login setToken={setToken} /> : <Register />}
    </div>
  );
};

export default Auth;
