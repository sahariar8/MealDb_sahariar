import VeganItem from './VeganItem';
import { useLoaderData } from 'react-router-dom';

const Vegan = () => {
    const {meals} = useLoaderData();
    return (
        <div>
           <h1 className="text-center text-2xl font-bold py-4">🥘Vegan Item</h1>
           <div className="grid md:grid-cols-4 gap-5 pt-3">
                {
                    meals.map(meal=><VeganItem meal={meal} key={meal.idMeal}></VeganItem>)
                }
           </div>
        </div>
    );
};

export default Vegan;