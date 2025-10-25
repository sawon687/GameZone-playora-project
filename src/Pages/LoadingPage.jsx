import React from 'react';
import { RiseLoader } from 'react-spinners'; // Import করা লাগবে
const LoadingPage = () => {
    return (
        <div className='flex flex-col space-y-10 min-h-screen justify-center items-center '>
            <h1 className='text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text  text-transparent'>Loading... </h1>
          <span className='flex'> <spanc className='flex'><RiseLoader color='#A855F7' size={20} />  <RiseLoader color='#A855F7' size={20} />  <RiseLoader color='#A855F7' size={20} /></spanc>
          
          </span>
          <span className='flex'>
            <RiseLoader color='#A855F7' size={20} />  <RiseLoader color='#A855F7' size={20} />  <RiseLoader color='#A855F7' size={20} />
          </span>
        </div>
    );
};

export default LoadingPage;