import React from 'react';
import img from '../../assets/images/jour3.jpg'

const Banner = () => {
    return (
        <div>
          <div  className='h-96 border-lg-black'>
            <img className='w-full h-96' src={img} alt="" />
          </div>
        </div>
    );
};

export default Banner;