import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
    const {name, _id,description, price, img} = service
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>< img  className='h-80' src={img} alt="Shoes" /></figure>
        <div className="card-body bg-white">
          <h1 className="card-title text-3xl text-red-700">{name}</h1>
          <div className="card-actions justify-end text-black">

            {
                description.length > 250 ?
             <p>{description.slice(0, 300) + '...'} <Link className='text-blue' to={`/services/${_id}`}>Read more</Link></p>
               :
                <p>{description}</p>
            }
           <button className="btn btn-primary">View Details</button>
          </div>
        </div>
      </div>
    );
};

export default Service;