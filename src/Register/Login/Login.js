import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='flex justify-center bg-purple-400 text-black py-20'>
           <div className="card w-full max-w-lg shadow-2xl bg-white">
      <div className="card-body">
        <div className="form-control">
            <h1 className='font-bold text-purple-900 text-4xl text-center'>Welcome Back</h1>
            <p className='text-black text-center mb-8'>Login to continue</p>
          <label className="label">
            <span className="label-text text-black">Email Address</span>
          </label>
          <input name='email' type="text"  placeholder="email" className="input input-bordered border-zinc-900 bg-purple-100" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black">Password</span>
          </label>
          <input name='password' type="text" placeholder="password" className="input input-bordered border-zinc-900 bg-purple-100" />
          <label className="label text-purple-700">
            <p>Doesn't have an account yet..??</p>
            <Link to='/signUp' className="label-text-alt link link-hover text-purple-900 font-semibold">Sign Up Now</Link>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-outline-danger  bg-sky-600 text-white">Login</button>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Login;