import React, { useState } from 'react';
import style from './RegistrationForm.module.css';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
  });

  const handleChange =(event)=>{
    const {name, value} = event.target;
    setFormData({...formData, [name]: value});
  };

  const handleSubmit=(event)=>{
    event.preventDefault();

    const users = JSON.parse(localStorage.getItem('user')) || [];
    users.push(formData);
    localStorage.setItem("users",JSON.stringify(users));

    alert("Registration Successfully!!");
  };

  return (
    <div className={style.con}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
      <div>
        <input type="text" placeholder='Name' onChange={handleChange} required />
      </div>
      <div>
        <input type="email" placeholder='Email' onChange={handleChange} required />
      </div>
      <div>
        <input type="password" placeholder='Password' onChange={handleChange} required />
      </div>
      <div>
        <input type="text" placeholder='Phone' onChange={handleChange} required />
      </div>
      <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegistrationForm;
