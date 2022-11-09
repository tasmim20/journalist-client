import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const SignUp = () => {
     const {createUser} = useContext(AuthContext);

     const handleSignUp = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        createUser(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            form.reset();
        })
        .catch(error => console.error(error))
     }


    return (
        <div className='flex justify-center bg-purple-400 text-black py-20'>
        <div className="card w-full max-w-lg shadow-2xl bg-white">
        <h1 className='font-bold text-purple-900 text-4xl text-center pb-6'>Create Account</h1>
   <form onSubmit={handleSignUp} className="card-body">
     <div className="form-control">
    
         <label className="label">
         <span className="label-text text-black">Your Name</span>
       </label>
       <input name='name' type="text"  placeholder="Name" className="input input-bordered border-zinc-900 bg-purple-100" />
       <label className="label">
         <span className="label-text text-black">Email Address</span>
       </label>
       <input name='email' type="email"  placeholder="email" className="input input-bordered border-zinc-900 bg-purple-100" />
     </div>
     <div className="form-control">
       <label className="label">
         <span className="label-text text-black">Password</span>
       </label>
       <input name='password' type="password" placeholder="password" className="input input-bordered border-zinc-900 bg-purple-100" />
       <label className="label text-purple-700">
         <p>Already have an account yet..??</p>
         <Link to='/login' className="label-text-alt link link-hover text-purple-900 font-semibold">Sign In</Link>
       </label>
     </div>
     <div className="form-control mt-6">
        <input type="submit"  className="btn btn-outline-danger  bg-sky-600 text-white" value="signUp"/>
       {/* <button type='submit'>Sign Up</button> */}
     </div>
   </form>
 </div>
     </div>
    );
};

export default SignUp;