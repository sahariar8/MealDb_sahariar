
import { useLoaderData } from 'react-router-dom';
import MiscellaneousItem from './MiscellaneousItem';

const Miscellaneous = () => {
    const {meals} = useLoaderData();

    return (
        <div>
           <h1 className="text-center text-2xl font-bold py-4">🥦Miscellaneous Item</h1>
           <div className="grid md:grid-cols-4 gap-5 pt-3">
                {
                    meals.map(meal=><MiscellaneousItem meal={meal} key={meal.idMeal}></MiscellaneousItem>)
                }
           </div>
        </div>
    );
};

export default Miscellaneous;