
import PopularGameCard from '../Components/PopularGameCard';
import { Authcontext } from '../PrivateRoutes/Context';
import UseLoadData from '../Hook/UseLoaddata';

const Games = () => {
    const {data}=UseLoadData()
    console.log(data)
    return (
        <>
          <div className='mx-auto space-y-5 w-11/12 mt-5'> 
        <h1 className='text-center   text-4xl font-bold'>Popular Games</h1>
        <p className='text-center'>This page will list all the games in the library.</p>
        <div className='flex justify-center flex-col items-center'>
            
              <div className='grid grid-cols-3 py-5 gap-20  mx-auto'>
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