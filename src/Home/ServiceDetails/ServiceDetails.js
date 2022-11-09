import React from 'react';
import { useLoaderData } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const ServiceDetails = () => {
    const {name, _id,description, price, img, user,rating} = useLoaderData();
    return (
 <div className='grid grid-cols-1 lg:grid-cols-2'>
    <div className='service-section '>
    <div className='flex justify-center my-30 mx-30'>
          <div className="card card-compact w-96 bg-base-100 mx-10 my-10 shadow-xl">
          <PhotoProvider>
      <PhotoView src={img}>
        <img src={img} alt="" />
      </PhotoView>
    </PhotoProvider>
      </div>
  
        {/* <figure>< img  className='h-80' src={img} alt="Shoes" /></figure> */}
        <div className="card-body bg-white">
          <h1 className="card-title text-3xl text-red-700 font-bold">{name}</h1>
          <div className="card-actions justify-end text-black">
             <p>{description.slice(0,700)}</p>
          </div>
          <div>
            <p>Payment for month:{price}</p>
          </div>
        </div>
      </div>
    </div>
    <div className='review-section flex align-center  justify-center bg-purple-300  mx-16'>
        <div className="overflow-x-auto ">
  {/* <table className="table w-full  bg-purple-300">
     <thead>
      <tr>
      
        <th>Name</th>
        <th>Review</th>
        <th>Rating</th>
     
      </tr>
    </thead>
    <tbody className=' bg-purple-300'>

      <tr>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={user.img} alt="Avatar Tailwind CSS Component" />
    
              </div>
            </div>
            <div>
              <div className="font-bold">{user.name}</div>
              <div className="text-sm opacity-50"></div>
            </div>
          </div>
        </td>
        <td>
       {user.review.slice(0,10)}
        </td>
        <td>{rating.number}</td>
        <th>
          <button className="btn btn-danger btn-xs">Remove</button>
        </th>
      </tr>
    </tbody>
   
    
  </table> */}
   <h2 className='text-3xl  mt-8 bg-red-500 rounded-xl text-center font-semibold text-black'>Reviews</h2>
  <div className="card w-96 bg-white shadow-xl mx-10 mt-10">
 
  <div className="card-body">
  <div className="mask mask-squircle w-16 h-22">
                <img src={user.img} alt="Avatar Tailwind CSS Component" />
    
              </div>
    <h2 className="card-title">{user.name}</h2>
    <p>{user.review}</p>
   
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Remove</button>
    </div>
  </div>
</div>
</div>
    </div>
 </div>



    );
};

export default ServiceDetails;