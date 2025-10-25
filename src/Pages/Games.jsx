
import PopularGameCard from '../Components/PopularGameCard';
import { Authcontext } from '../PrivateRoutes/Context';
import UseLoadData from '../Hook/UseLoaddata';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
const Games = () => {
    const {data}=UseLoadData()
    console.log(data)

    const [displaytext,SetDisplayText]=useState('')

    const fullText='Popular Games'

    useEffect(()=>
    {   let index=0
      let delating=false
      const interval=setInterval(() => {
        if(!delating)
        {
           SetDisplayText(fullText.slice(0,index))
           index++
           if(index > fullText.length)
           {
               delating=true;
               index=fullText.length
           }
        }else{
          SetDisplayText(fullText.slice(0,index))
           index--
           if(index<0)
           {
             delating=false;
             index=0;

           }
        }
      }, 120);
            return ()=>{
              clearInterval(interval)
            }
    },[])
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
                      <h1 className='text-center pt-10 bg-clip-text  bg-gradient-to-r  from-purple-600 to-pink-600   text-transparent  text-5xl font-bold'>{displaytext}</h1>
                  <p className='text-center mt-5 text-gray-400 '>This page will list all the games in the library.</p>
            </motion.div>
         <div className='w-11/12 mx-auto'> <h1 className='font-bold text-left text-3xl'>AllGames({data.length})</h1></div>
        <motion.div 
        initial={{y:-50,opacity:0, scale:1}}
            animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.1 }}
         className='flex justify-center flex-col items-center'>
            
              <div className='grid  md:grid-cols-2 lg:grid-cols-3  py-5 gap-10  mx-auto'>
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