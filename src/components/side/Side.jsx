
import { useLoaderData } from 'react-router-dom';
import SideItem from './SideItem';

const Side = () => {
    const {meals} = useLoaderData();
    return (
        <div>
           <h1 className="text-center text-2xl font-bold py-4">🌭Side Item</h1>
           <div className="grid md:grid-cols-4 gap-5 pt-3">
                {
                    meals.map(meal=><SideItem meal={meal} key={meal.idMeal}></SideItem>)
                }
           </div>
        </div>
    );
};

export default Side;