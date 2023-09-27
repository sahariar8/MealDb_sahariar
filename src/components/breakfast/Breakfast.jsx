import BreakfastItem from './BreakfastItem';
import { useLoaderData } from 'react-router-dom';

const Breakfast = () => {
    const {meals} = useLoaderData();
    return (
        <div>
           <h1 className="text-center text-2xl font-bold py-4">🍔Breakfast Item</h1>
           <div className="grid md:grid-cols-4 gap-5 pt-3">
                {
                    meals.map(meal=><BreakfastItem meal={meal} key={meal.idMeal}></BreakfastItem>)
                }
           </div>
        </div>
    );
};

export default Breakfast;