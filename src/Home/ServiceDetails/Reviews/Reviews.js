import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Reviews = () => {
    const {_id, price} = useLoaderData();
      const {user} = useContext(AuthContext);

      const handleAddReview = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = user?.email || 'unregistered';
        const message = form.message.value;
        console.log(name, email, message);

      const review = {
        service:_id,
        serviceName: price,
        customer : name,
        email,
        message
        
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
            alert('review added successfully')
            form.reset();
        }
      })
      .catch(error => console.error(error));

      }

    return (
        <div>
            
         
            <form onSubmit={handleAddReview}>
            <h2 className='text-center mt-8 mb-4 text-3xl  bg-red-900 rounded-xl text-black font-bold'>Add Review.!!!</h2>
            <h2 className='text-2xl text-red-800'>Service:{price}</h2>
            <div>
            <input name='name' type="name" placeholder="Your name" className="input input-bordered bg-white input-info mb-4 mt-4 w-full max-w-xs" />
            <input name='email' type="email" placeholder="Email address" defaultValue={user?.email} className="input input-bordered bg-white input-info w-full max-w-xs" readOnly />
            </div>
            </form>
            <textarea name='message' className="textarea textarea-error w-full bg-white mt-4 mb-2"  placeholder="Write Review"></textarea>
            <input type="submit"  className="btn btn-outline-danger  bg-purple-800 text-white" value="Submit"/>

       
        </div>
    );
};

export default Reviews;