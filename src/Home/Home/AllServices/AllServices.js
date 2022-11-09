import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Service from '../Service/Service';

const AllServices = () => {
    const services = useLoaderData();
    return (
       <div className='bg-white py-10'>
         <div className='grid grid-cols-1 mx-0 lg:grid-cols-3 gap-7 lg:mx-20 '>
           {
           services.map(service => <Service key={service._id} service={service}></Service>)
           }
            
        </div>
       </div>
    );
};

export default AllServices;