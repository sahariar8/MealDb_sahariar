import { useLoaderData } from "react-router-dom";
import VegetarianItem from "./VegetarianItem";

const Vegetarian = () => {
    const {meals} = useLoaderData();
    return (
        <div>
           <h1 className="text-center text-2xl font-bold py-4">🥑Vegetarian Item</h1>
           <div className="grid md:grid-cols-4 gap-5 pt-3">
                {
                    meals.map(meal=><VegetarianItem meal={meal} key={meal.idMeal}></VegetarianItem>)
                }
           </div>
        </div>
    );
};

export default Vegetarian;