
import { useLoaderData } from 'react-router-dom';
import DesertItem from './DesertItem';

const Desert = () => {
    const {meals} = useLoaderData();
    return (
        <div>
           <h1 className="text-center text-2xl font-bold py-4">🍮Dessert Item</h1>
           <div className="grid md:grid-cols-4 gap-5 pt-3">
                {
                    meals.map(meal=><DesertItem meal={meal} key={meal.idMeal}></DesertItem>)
                }
           </div>
        </div>
    );
};

export default Desert;