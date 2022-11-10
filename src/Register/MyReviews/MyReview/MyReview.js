import React from 'react';

const MyReview = ({review, handleDelete}) => {
    const{photoURL,_id, serviceName,customer, reviews} = review;

   

    return (
        <div className='flex justify-center'>
              
  <div className="card w-96 flex justify-center align-center bg-slate-200 shadow-lg mx-10 mt-10 my-14 text-black">
 <div className="card-body">
    <h2 className='text -center text-2xl text-sky-900 font-bold'>Service: {customer}</h2>
  <div className="mask mask-squircle w-16 h-22">
  <img src={photoURL} alt="Avatar Tailwind CSS Component" />
    </div>
 <h2 className="card-title text-black">{serviceName}</h2>
<p>{reviews}</p>
 <div className="card-actions justify-between">
    <button className='btn btn-info'>Edit Review</button>
<button onClick={() => handleDelete(_id)} className="btn btn-error">Delete</button>
</div>
  </div> 
        </div>
        </div>
    );
};

export default MyReview;