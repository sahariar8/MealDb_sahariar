
import { useLoaderData } from 'react-router-dom';
import SeafoodItem from './SeafoodItem';

const Seafood = () => {
    const {meals} = useLoaderData();
    return (
        <div>
           <h1 className="text-center text-2xl font-bold py-4">🦈SeaFood Item</h1>
           <div className="grid md:grid-cols-4 gap-5 pt-3">
                {
                    meals.map(meal=><SeafoodItem meal={meal} key={meal.idMeal}></SeafoodItem>)
                }
           </div>
        </div>
    );
};

export default Seafood;