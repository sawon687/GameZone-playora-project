
import PopularGameCard from '../Components/PopularGameCard';
import { Authcontext } from '../PrivateRoutes/Context';
import UseLoadData from '../Hook/UseLoaddata';

const Games = () => {
    const {data}=UseLoadData()
    console.log(data)
    return (
        // bg-[#010313]
        <>
          <div className='mx-auto space-y-5  w-12/12 '> 
        <h1 className='text-center pt-10 bg-clip-text  bg-gradient-to-r  from-purple-600 to-pink-600   text-transparent  text-5xl font-bold'>Popular Games</h1>
        <p className='text-center text-gray-400 '>This page will list all the games in the library.</p>
       
        <div className='flex justify-center flex-col items-center'>
            
              <div className='grid sm:grid-cols-2 md:grid-cols-3 py-5 gap-20  mx-auto'>
                 {
                   data.map(popularCard=> <PopularGameCard key={popularCard.id} popularCard={popularCard}></PopularGameCard> )
                 }
              </div>
        </div>
         </div>  
        </>
    );
};

export default Games;