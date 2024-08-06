import React, { useState } from 'react';
import './Loginsignup.css'
import logo from '../Assests/logo.png'; 


const CreateAccount = () => {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div className="create-account">

      <img src={logo} alt="Logo" />

      <h2>VOLUNTEER WITH US</h2>

      <p>Create Your Account </p>
      <p>To Get Started👇</p>
      
      <form>

        <h3>Full Name</h3>
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={form.fullName}
          onChange={handleChange}
        />

         <h3>Email</h3>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />

         <h3>Password</h3>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
        />

        <button>Next → </button>
      </form>

    </div>
  );
};

export default CreateAccount;
