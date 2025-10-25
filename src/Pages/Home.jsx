import React from 'react';
import Banner from '../Components/Banner';
import PopularGame from '../Components/PopularGame';
import NewsLattter from '../Components/NewsLattter';

const Home = () => {
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