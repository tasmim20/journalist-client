import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Service from '../Service/Service';

const Services = () => {
    const services = useLoaderData();
    console.log(services);

    return (
        <div className='grid grid-cols-1 mx-0 lg:grid-cols-3 gap-7 bg-slate-300 lg:mx-20 lg:my-7 '>
            {
                services.map(service => <Service key={service._id} service={service}></Service>)
            }
        </div>
    );
};

export default Services;