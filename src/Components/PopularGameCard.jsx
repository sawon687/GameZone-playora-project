import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router';

const PopularGameCard = ({popularCard}) => {
    console.log(popularCard)
    
    
    const {id,title ,coverPhoto ,description, ratings}=popularCard
    return (
        <div className='rounded-2xl w-[300px]  bg-gray-700 h-full'>
           
                <figure><img className=' rounded-2xl  object-fit w-full h-[350px]' src={coverPhoto} alt="" /></figure>
                 
                    <div className='space-y-2 px-4 py-3 h-full' >
                         <div className='flex justify-between'>
                             <h1 className='text-white text-xl  font-bold '>{title}</h1>
                        <p className='text-red-500 font-semibold space-y-3 text-xl flex items-center gap-2 '>{ratings}<FaStar size={18} color='red' /></p>
                         </div>
                             <p>{ description.slice(0,72)}...
                   
                                </p>

                                 <Link className='bg-green-600  btn ouline-0 font-bold w-full' to={`/GameDetails/${id}`}>SeeMore</Link>
                         
                              </div>
                   
                   
                 
                
            </div>

        
    );
};

export default PopularGameCard;