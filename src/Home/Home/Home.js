import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Services from './Services/Services';


const Home = () => {

    return (
        <div className='bg-white mb-15'>
           <Banner></Banner>
             <Services></Services>
            <About></About>
          
        </div>
    );
};

export default Home;