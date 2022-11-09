import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const Service = ({service}) => {
    const {name, _id,description, price, img} = service
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-2xl hover:bg-purple">
        <figure>
          <PhotoProvider>
            <PhotoView src={img}>
            < img  className='h-80' src={img} alt="Shoes" />
            </PhotoView>
          </PhotoProvider>
          </figure>
        <div className="card-body bg-white">
          <h1 className="card-title text-2xl font-bold text-black">{name}</h1>
          <div className="card-actions justify-end text-black">

            {
                description.length > 50 ?
             <p>{description.slice(0, 100) + '...'} <Link className='text-blue-700 font-weight-900' to={`/serviceDetails/${_id}`}>Read more</Link></p>
               :
                <p>{description}</p>
            }
            <p className='text-red-900 text-lg'>Fee(price):{price}.00</p>
          <Link to={`/serviceDetails/${_id}`}> <button className="btn btn-primary ">View Details</button></Link>
          </div>
        </div>
      </div>
    );
};

export default Service;