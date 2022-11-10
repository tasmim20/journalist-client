import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Reviews = () => {
    const {_id,price, name} = useLoaderData();
      const {user} = useContext(AuthContext);

      const handleAddReview = event =>{
        event.preventDefault();
        const form = event.target;
        const fullName = form.fullName.value;
        const email = user?.email || 'unregistered';
        const photoURL = form.photoURL.value;
        const reviews = form.reviews.value;
        console.log(fullName, email, reviews);

      const review = {
        service:_id,
         serviceName: fullName,
        price,
        customer: name,
        email,
        photoURL,
        reviews
        
      }
      fetch('http://localhost:5000/reviews', {
          method:'POST',
          headers: {
            'content-type': 'application/json'
          },
          body:JSON.stringify(review)
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if(data.acknowledged){
             alert('Review added successfully')
            form.reset();
        }
      })
      .catch(error => console.error(error));

      }

    return (
        <div>
            
         
            <form onSubmit={handleAddReview}>
            <h2 className='text-center mt-8 mb-4 mx-8 text-3xl  bg-red-900 rounded-xl text-black font-bold'>Add Review.!!!</h2>
            <h2 className='text-2xl text-center text-red-800'>Service:{name}</h2>
          
            <div className='mx-8'>
            <input name='fullName' type="name" placeholder="Your name" className="input input-bordered bg-white input-info mb-4 mt-4 w-full max-w-xs" />
            <input name='photoURL' type="photoURL" placeholder="Your Photo" className="input input-bordered bg-white input-info mb-4 mt-4 w-full max-w-xs" />
            <input name='email' type="email" placeholder="Email address" defaultValue={user?.email} className="input input-bordered bg-white input-info w-full max-w-xs" readOnly />
            </div>
            <div className='block'>           
               <textarea name='reviews' className="textarea textarea-error w-96 bg-white mt-4 mb-2 mx-7"  placeholder="Write Review" required></textarea> 
               <br />
            <input type="submit" className="btn btn-outline-danger  mx-8 bg-purple-800 text-white" value="Add Review"/>
          
            </div>
            </form>


       
        </div>
    );
};

export default Reviews;