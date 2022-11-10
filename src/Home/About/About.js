import React from 'react';
import img1 from '../../assets/images/df.jpg'

const About = () => {
    return (
        <div className='mb-16'>
          <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse">
         <div className='w-1/2'>
         <img src={img1} className=" h-96 w-full rounded-lg shadow-2xl" alt='' />
         </div>
          <div className='w-1/2'>
            <h1 className="text-5xl font-bold text-black">About me..!!</h1>
            <p className="py-6 text-xl text-black">Hey..!! This is Journalist..Tasmim Rahman.
             I am a Senior Reporter of 71 <span className='texl-3xl text-red-900 font-semibold'>Independent Television</span> I also work on a Newspaper "The Daily Start."
            </p>
            <p className='text-black mb-3'>For any information Email use : <span className='text-sky-900'>tasmim@gmail.com</span></p>
            <button className="btn btn-outline bg-purple-700 text-black">Contact</button>
          </div>
        </div>
      </div>

      <div className='mb-10 shadow-lg rounded-lg mx-15'>
      <div className='text-black text-center my-10 shadow-xl py-4 px-6 bg-slate-200'>
        <h2 className='text-5xl font-bold  mb-4 mt-6'>About My Service</h2>
        <p>I investigates, collects, and presents information as a news story. This can be presented through newspapers, magazines, radio, television and the internet. Journalists are relied upon to present news in a well-rounded, objective manner..description.
     Journalist Job Description The key objective of a journalist is to gather information, write news pieces, and present the news in an honest and balanced manner. In addition to investigating and reporting on current events, they also work on articles and features that update and influence public opinion.</p>
      </div>
      </div>
 
        </div>
    );
};

export default About;