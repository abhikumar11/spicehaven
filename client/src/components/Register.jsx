import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {

  const[frmData,setFrmData]=useState({});

    const handleInput = (e) => {
    const {name,value}=e.target;
    setFrmData({...frmData,[name]:value});
    
  };

  const handleRegister = (e) => {
    e.preventDefault()
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white shadow-md rounded-xl p-8">
        <h2 className="text-2xl font-bold text-center text-red-500 mb-6">Register to Spice Haven</h2>

        <form onSubmit={handleRegister} className="space-y-4">
           <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="text"
              required
              name="name"
              onChange={handleInput}
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
              placeholder="Jhon"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              required
              name="email"
              onChange={handleInput}
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              required
              name="password"
              onChange={handleInput}
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-500 text-white py-2 rounded-lg font-semibold hover:bg-red-600 transition"
          >
            Sign up
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-4">
          Already have an account? <Link to="/login"className="text-red-500 hover:underline">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
