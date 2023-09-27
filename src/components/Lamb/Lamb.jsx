
import { useLoaderData } from 'react-router-dom';
import LambItems from './LambItems';

const Lamb = () => {
    const {meals} = useLoaderData();

    return (
        <div>
           <h1 className="text-center text-2xl font-bold py-4">🐃 Lamb Item </h1>
           <div className="grid md:grid-cols-4 gap-5 pt-3">
                {
                    meals.map(meal=><LambItems meal={meal} key={meal.idMeal}></LambItems>)
                }
           </div>
        </div>
    );
};

export default Lamb;