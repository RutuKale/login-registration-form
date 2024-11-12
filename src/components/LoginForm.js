import React, { useState } from 'react';
import style from  './LoginForm.module.css';

function LoginForm() {
  const [loginData, setLoginData]=useState({email:"",password:''});

  const handleChange=(event)=>{
    const{name, value}=event.target;
    setLoginData({...loginData, [name]: value});
  };

  const handleSubmit=(event)=>{
    event.preventDefault();

    const users=JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(
      (user)=>user.email === loginData.email && user.password === loginData.password
    );

    if(user){
      alert("Login Successfully!!");
    }else{
      alert('Invalid email or password!');
    }
  };

  return (
    <div className={style.con}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
      <div>
        <input type="text" placeholder='Email' onChange={handleChange} required />
      </div>
      <div>
        <input type="password" placeholder='Password' onChange={handleChange} required />
      </div>
      <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
