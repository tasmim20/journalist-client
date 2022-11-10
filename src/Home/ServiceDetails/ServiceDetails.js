import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import ReviewSection from './ReviewSection/ReviewSection';

const ServiceDetails = () => {
    const {name, _id,description, price, img, user,rating} = useLoaderData();
    return (
 <div className='grid grid-cols-1 lg:grid-cols-2 bg-white gap-x-20 rounded-xl'>
     <div className="card card-compact w-full bg-base-100 shadow-xl mx-16 mb-14 mt-8">
        <figure>
          <PhotoProvider>
            <PhotoView src={img}>
            < img  className='h-80' src={img} alt="Shoes" />
            </PhotoView>
          </PhotoProvider>
          </figure>
        <div className="card-body bg-white">
          <h1 className="card-title text-4xl font-bold text-red-700">{name}</h1>
          <div className="card-actions justify-end text-black">
              <p>{description}</p>
          
          </div>
          <div>
             <p className='text-black text-2xl my-4'>Fee(price):{price}.00</p>
            <p className='text-xl my-4 text-black'>Rating: {rating.number}star</p>
            <p className='text-red-800'><span>Badge: {rating.badge}</span></p>
          </div>
        </div>
      </div>
    <div className='review-section flex align-center  justify-center bg-purple-300  mx-16 mb-14 mt-8 rounded-xl'>
     


  <ReviewSection></ReviewSection>
    </div>
 </div> 



    );
};

export default ServiceDetails;