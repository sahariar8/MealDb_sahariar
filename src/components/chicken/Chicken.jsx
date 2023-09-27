
import { useLoaderData } from 'react-router-dom';
import ChickenItem from './ChickenItem';

const Chicken = () => {
    const {meals} = useLoaderData();
    return (
        <div>
        <h1 className="text-center text-2xl font-bold py-4">🍖Chicken Item</h1>
        <div className="grid md:grid-cols-4 gap-5 pt-3">
             {
                 meals.map(meal=><ChickenItem meal={meal} key={meal.idMeal}></ChickenItem>)
             }
        </div>
     </div>
    );
};

export default Chicken;