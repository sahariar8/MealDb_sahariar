import { useLoaderData } from "react-router-dom";
import BeefItem from "./BeefItem";


const Beef = () => {
    const {meals} = useLoaderData();

    return (
        <div>
           <h1 className="text-center text-2xl font-bold py-4">🍖Beef Item</h1>
           <div className="grid md:grid-cols-4 gap-5 pt-3">
                {
                    meals.map(meal=><BeefItem meal={meal} key={meal.idMeal}></BeefItem>)
                }
           </div>
        </div>
    );
};

export default Beef;