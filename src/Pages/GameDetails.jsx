import React from 'react';
import { Link, useParams } from 'react-router';
import UseLoadData from '../Hook/UseLoaddata';
import { FaStar } from 'react-icons/fa';

const GameDetails = () => {
    const {data}=UseLoadData()
    const {id}=useParams();
    
    const singlegame=data.find(game=> game.id==id)||[]
    const {title ,coverPhoto ,description, developer, ratings,category ,downloadLink}=singlegame
    console.log(singlegame)

    return (
        <div className='w-8/12 mt-20  mx-auto'>
            <div className='flex gap-30'>
                <figure><img className='w-[200px] h-[200px] rounded-2xl' src={coverPhoto} alt="" /></figure>
                <div className='space-y-5'>
                    <h1 className='text-3xl font-bold '>{title}</h1>
                    <p className='tex-2xl font-bold'> Develop by:<span className='font-semibold ml-2 text-green-500 '>{developer}</span></p>
                    <h4 className='flex items-center gap-2'>{ratings} <FaStar color='gold'></FaStar></h4>
                    <h1>Category:  <span className='ml-2'>{category}</span></h1>
                    <Link to={downloadLink} className='btn bg-green-500'>downloadLink</Link>
                    
                </div>
                
            </div>
            <p className='mt-20 text-xl text-gray-400 '><span className='font-bold text-gray-200'>description:</span>{description}</p>
        </div>
    );
};

export default GameDetails;