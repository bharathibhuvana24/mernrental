import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    console.log(formData);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post("/api/user/signup", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = res.data;
      console.log(data);

      if (data.success === false) {
        setLoading(false);
        setError(data.message);
        return;
      }

      setLoading(false);
      setError(null);
      Navigate("/sign-in");

    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  }

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl mb-5 text-center font-semibold'>Sign Up</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4 '>
        <input type="text"
          placeholder='Enter Your Name...'
          className='border p-3 rounded-lg'
          id='username'
          onChange={handleChange} />

        <input type="email"
          placeholder='Enter your Email address...'
          className='border p-3 rounded-lg'
          id='email'
          onChange={handleChange} />

        <input type="password"
          placeholder='Enter Your Password...'
          className='border p-3 rounded-lg'
          id='password'
          onChange={handleChange} />

        <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>
          {loading ? "loading..." : "Sign Up"}
        </button>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Have an account?</p>
        <Link to='/sign-in'>
          <span className='text-blue-500'>Sign in</span></Link>
      </div>
      {error && <p className='text-red-500 mt-5'>{error}</p>}
    </div>
  )
}

export default SignUp;
