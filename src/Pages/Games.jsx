
import PopularGameCard from '../Components/PopularGameCard';
import { Authcontext } from '../PrivateRoutes/Context';
import UseLoadData from '../Hook/UseLoaddata';
import { motion } from 'framer-motion';
const Games = () => {
    const {data}=UseLoadData()
    console.log(data)
    return (
        // bg-[#010313]
        <>
          <div className='mx-auto w-11/12 space-y-5  '> 
          <title>AllGames</title>
           <motion.div 
            initial={{y:30,opacity:0, scale:1}}
            animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
           >
                      <h1 className='text-center pt-10 bg-clip-text  bg-gradient-to-r  from-purple-600 to-pink-600   text-transparent  text-5xl font-bold'>Popular Games</h1>
                  <p className='text-center text-gray-400 '>This page will list all the games in the library.</p>
            </motion.div>
         <div className='w-10/12 mx-auto'> <h1 className='font-bold text-left text-3xl'>AllGames({data.length})</h1></div>
        <motion.div 
        initial={{y:-50,opacity:0, scale:1}}
            animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.1 }}
         className='flex justify-center flex-col items-center'>
            
              <div className='grid sm:grid-cols-2 md:grid-cols-3 py-5 gap-20  mx-auto'>
                 {
                   data.map(popularCard=> <PopularGameCard key={popularCard.id} popularCard={popularCard}></PopularGameCard> )
                 }
              </div>
        </motion.div>
         </div>  
        </>
    );
};

export default Games; 