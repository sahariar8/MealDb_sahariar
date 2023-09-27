
import { useLoaderData } from 'react-router-dom';
import StarterItem from './StarterItem';

const Starter = () => {
    const {meals} = useLoaderData();
    return (
        <div>
           <h1 className="text-center text-2xl font-bold py-4">🥘Starter Item</h1>
           <div className="grid md:grid-cols-4 gap-5 pt-3">
                {
                    meals.map(meal=><StarterItem meal={meal} key={meal.idMeal}></StarterItem>)
                }
           </div>
        </div>
    );
};

export default Starter;