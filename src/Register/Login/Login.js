import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { FaGoogle } from 'react-icons/fa';
import {GoogleAuthProvider} from 'firebase/auth';



const Login = () => {
  const {signIn, providerLogin} = useContext(AuthContext);

  const googleProvider = new GoogleAuthProvider()

  const navigate = useNavigate();


  const handleGoogleSignIn = () =>{
    providerLogin(googleProvider)
    .then(result =>{
        const user = result.user;
        console.log(user);
    })
    .catch(error => console.error(error))
  }
  
  const handleSubmit = event =>{
    event.preventDefault();
    const form =event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
    .then(result =>{
        const user = result.user;
        console.log(user);
        form.reset();
        navigate('/');
    })
    .catch(error => console.error(error))
  }


    return (
        <div className='flex justify-center bg-purple-400 text-black py-20'>
           <div className="card w-full max-w-lg shadow-2xl bg-white">
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
            <h1 className='font-bold text-purple-900 text-4xl text-center'>Welcome Back</h1>
            <p className='text-black text-center mb-8'>Login to continue</p>
          <label className="label">
            <span className="label-text text-black">Email Address</span>
          </label>
          <input name='email' type="email"  placeholder="email" className="input input-bordered border-zinc-900 bg-purple-100"  required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black">Password</span>
          </label>
          <input name='password' type="password" placeholder="password" className="input input-bordered border-zinc-900 bg-purple-100" required />
          <label className="label text-purple-700">
            <p>Doesn't have an account yet..??</p>
            <Link to='/signUp' className="label-text-alt link link-hover text-purple-900 font-semibold">Sign Up Now</Link>
          </label>
        </div>
        <div className="form-control mt-6">
        <input type="submit"  className="btn btn-outline-danger  bg-sky-600 text-white" value="login"/>
        </div>
       
      </form>
      <div className='mb-4 flex justify-center'>
      <button onClick={handleGoogleSignIn} className="btn btn-outline btn-error text-bold"><p className='px-2'><FaGoogle className='text-purple-900 text-lg'></FaGoogle></p> Login with google</button>
       
        </div>
    </div>
        </div>
    );
};

export default Login;