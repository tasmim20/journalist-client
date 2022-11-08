import React from 'react';
import { useLoaderData } from 'react-router-dom';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Services from './Services/Services';


const Home = () => {

    return (
        <div className='bg-white'>
           <Banner></Banner>
             <Services></Services>
            <About></About>
        </div>
    );
};

export default Home;