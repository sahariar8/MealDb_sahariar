import { useLoaderData } from "react-router-dom";
import PorkItem from "./PorkItem";


const Pork = () => {
    const {meals} = useLoaderData();

    return (
        <div>
           <h1 className="text-center text-2xl font-bold py-4">🍿Pork Item</h1>
           <div className="grid md:grid-cols-4 gap-5 pt-3">
                {
                    meals.map(meal=><PorkItem meal={meal} key={meal.idMeal}></PorkItem>)
                }
           </div>
        </div>
    );
};

export default Pork;