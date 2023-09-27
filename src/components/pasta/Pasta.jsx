import { useLoaderData } from "react-router-dom";
import PastaItem from "./PastaItem";


const Pasta = () => {
    const {meals} = useLoaderData();

    return (
        <div>
           <h1 className="text-center text-2xl font-bold py-4">🍜Pasta Item</h1>
           <div className="grid md:grid-cols-4 gap-5 pt-3">
                {
                    meals.map(meal=><PastaItem meal={meal} key={meal.idMeal}></PastaItem>)
                }
           </div>
        </div>
    );
};

export default Pasta;