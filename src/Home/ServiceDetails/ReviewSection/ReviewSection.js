import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import AllReviews from '../AllReviews/AllReviews';
import Reviews from '../Reviews/Reviews';

const ReviewSection = () => {
    const service = useLoaderData()
    const {user} = useContext(AuthContext);

    const [reviews, setReviews] = useState([])
 

  
    useEffect(() =>{
       fetch('http://localhost:5000/reviews')
       .then(res => res.json())
       .then(data => setReviews(data))
    },[])
   
    return (
        <div>
   <h2 className='text-3xl  mt-8 bg-red-500  mx-8 rounded-xl text-center font-semibold text-black'>Reviews</h2>
  <div className="card w-96 bg-white flex justify-center align-center shadow-xl mx-10 mt-10">
 <div className="card-body">
  <div className="mask mask-squircle w-16 h-22">
  <img src={service.reviewer.img} alt="Avatar Tailwind CSS Component" />
    </div>
 <h2 className="card-title">{service.reviewer.name}</h2>
<p>{service.reviewer.review}</p>
 <div className="card-actions justify-end">
<button className="btn btn-primary">Remove</button>
</div>
  </div> 
</div>

        <div className='flex align-center  justify-center ms-6 pb-4 '>

          <div>
            {
              reviews.map(review => <AllReviews key={review._id} review={review}></AllReviews>)
            }
          </div>
                 {
                   user?.uid?
                   <Reviews></Reviews>
                   :
                   <Link className='text-red-500 my-14 text-xl' to='/login'>Please Login to add a review</Link>

                 }
            </div>

        </div>
    );
};

export default ReviewSection;