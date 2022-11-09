import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Service from '../Service/Service';

const Services = () => {
    const services = useLoaderData();
    console.log(services);

    return (
    <div>
            <div className='grid grid-cols-1 mx-0 lg:grid-cols-3 gap-7 lg:mx-20 lg:my-7 '>
            {
                services.map(service => <Service key={service._id} service={service}></Service>)
            }   
        </div>
        <div className='flex justify-center'>
      <Link to='/allServices'> <button className="btn btn-active btn-secondary px-6">See All</button></Link>
        </div>
    </div>
       
    );
};

export default Services;