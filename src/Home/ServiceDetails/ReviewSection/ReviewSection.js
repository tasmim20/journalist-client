import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import Reviews from '../Reviews/Reviews';

const ReviewSection = () => {
    const service = useLoaderData()
    const {user} = useContext(AuthContext);
   
    return (
        <div>
   <h2 className='text-3xl  mt-8 bg-red-500 rounded-xl text-center font-semibold text-black'>Reviews</h2>
  <div className="card w-96 bg-white shadow-xl mx-10 mt-10">
  <div className="card-body">
  <div className="mask mask-squircle w-16 h-22">
  <img src={service.user.img} alt="Avatar Tailwind CSS Component" />
    </div>
 <h2 className="card-title">{service.user.name}</h2>
<p>{service.user.review}</p>
 <div className="card-actions justify-end">
<button className="btn btn-primary">Remove</button>
</div>
  </div>
</div>

        <div className='flex align-center  justify-center ms-6 pb-4 '>
                 {
                   user?.uid?
                   <Reviews></Reviews>
                   :
                   <Link to='/login'>Please Login to add a review</Link>

                 }
            </div>

        </div>
    );
};

export default ReviewSection;