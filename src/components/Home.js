import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.module.css';

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <button onClick={() => navigate('/login')}>Login</button>
      <button onClick={() => navigate('/registration')}>Register</button>
    </div>
  );
}

export default Home;
