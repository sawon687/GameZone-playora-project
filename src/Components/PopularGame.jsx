
import UseLoadData from '../Hook/UseLoaddata';
import PopularGameCard from './PopularGameCard';


const PopularGame = () => {
  const {data} = UseLoadData()


  
        const popularcard=data.filter(game=> game.ratings >='4.5')
      
  


    return (
         <div className='mx-auto w-11/12 mt-5'> 
        <h1 className='text-left ml-40 border-l-5 border-red-500 text-4xl font-bold'>Popular Games</h1>
        <div className='flex justify-center flex-col items-center'>
            
              <div className='grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 py-5 gap-20  mx-auto'>
                 {
                   popularcard.map(popularCard=> <PopularGameCard key={popularCard.id} popularCard={popularCard}></PopularGameCard> )
                 }
              </div>
        </div>
         </div>
    );
};

export default PopularGame;