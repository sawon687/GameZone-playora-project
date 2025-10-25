
import { MdOpacity } from 'react-icons/md';
import UseLoadData from '../Hook/UseLoaddata';
import PopularGameCard from './PopularGameCard';
import { motion } from 'framer-motion';

const PopularGame = () => {
  const {data} = UseLoadData()


  
   const popularcard=data.filter(game=> game.ratings >='4.5')
      
  


    return (
         <motion.div 
        initial={{y:30,opacity: 0 }}
        animate={{y:0, opacity:1 }}
      transition={{ duration: 1.5 }}
         
         className='mx-auto w-11/12 mt-5'> 
        <h1 className='text-left w-11/12 my-10 mx-auto border-l-5 border-red-500 text-4xl font-bold'>Popular Games</h1>
        <div className='flex justify-center flex-col items-center'>
            
              <div className='grid sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-3 py-5 md:gap-10  mx-auto'>
                 {
                   popularcard.map(popularCard=> <PopularGameCard key={popularCard.id} popularCard={popularCard}></PopularGameCard> )
                 }
              </div>
        </div>
         </motion.div>
    );
};

export default PopularGame;