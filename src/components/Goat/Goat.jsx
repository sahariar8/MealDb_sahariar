import React from 'react';
import { useLoaderData } from 'react-router-dom';
import GoatItem from './GoatItem';

const Goat = () => {
    const {meals} = useLoaderData();
    return (
        <div>
           <h1 className="text-center text-2xl font-bold py-4">🐐Goat Item</h1>
           <div className="grid md:grid-cols-4 gap-5 pt-3">
                {
                    meals.map(meal=><GoatItem meal={meal} key={meal.idMeal}></GoatItem>)
                }
           </div>
        </div>
    );
};

export default Goat;