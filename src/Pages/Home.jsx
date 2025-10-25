import React, { useEffect, useState } from 'react';
import Banner from '../Components/Banner';
import PopularGame from '../Components/PopularGame';
import NewsLattter from '../Components/NewsLattter';
import LoadingPage from './LoadingPage';

const Home = () => {
    const [loading,setLoading]=useState(true)

    useEffect(()=>{
         setTimeout(() => {
             setLoading(false)
         }, 1000);
    },[])
    if(loading)
    {
        return <LoadingPage></LoadingPage>
    }
    return (
        <div >
            
            <title>Home</title>
           <Banner></Banner>
           <PopularGame></PopularGame>
           <NewsLattter></NewsLattter>
          
        </div>
    );
};

export default Home;