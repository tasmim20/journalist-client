import React from 'react';
import img1 from '../../assets/images/df.jpg'

const About = () => {
    return (
        <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse">
         <div className='w-1/2'>
         <img src={img1} className=" h-96 w-full rounded-lg shadow-2xl" alt='' />
         </div>
          <div className='w-1/2'>
            <h1 className="text-5xl font-bold text-black">About me..!!</h1>
            <p className="py-6 text-xl text-black">I investigates, collects, and presents information as a news story. This can be presented through newspapers, magazines, radio, television and the internet. Journalists are relied upon to present news in a well-rounded, objective manner..</p>
            <button className="btn btn-outline bg-purple-700 text-black"></button>
          </div>
        </div>
      </div>
    );
};

export default About;