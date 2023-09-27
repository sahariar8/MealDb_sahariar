
import { NavLink, useLoaderData } from "react-router-dom";
import Category from "./Category";


const AllFood = () => {
    const {categories} = useLoaderData();
  
   console.log(categories)
    return (
        <div>
            <h1 className="text-center text-2xl font-bold py-3">Meal</h1>
            <div className="category flex justify-center gap-5 text-lg font-semibold font-serif flex-wrap md:flex-nowrap">
                <NavLink to="/Beef">Beef</NavLink>
                <NavLink to="/Chicken">Chicken</NavLink>
                <NavLink to="/Dessert">Dessert</NavLink>
                <NavLink to="/Lamb">Lamb</NavLink>
                <NavLink to="/Miscellaneous">Miscellaneous</NavLink>
                <NavLink to="/Pasta">Pasta</NavLink>
                <NavLink to="/Pork">Pork</NavLink>
                <NavLink to="/Seafood">Seafood</NavLink>
                <NavLink to="/Side">Side</NavLink>
                <NavLink to="/Starter">Starter</NavLink>
                <NavLink to="/Vegan">Vegan</NavLink>
                <NavLink to="/Vegetarian">Vegetarian</NavLink>
                <NavLink to="/Breakfast">Breakfast</NavLink>
                <NavLink to="/Goat">Goat</NavLink>
            </div>
            <div className="grid md:grid-cols-4 gap-5 mb-2">
                {
                    categories.map(item=><Category item={item} key={item.idCategory}></Category>)
                }
            </div>
            
           
        </div>
    );
};

export default AllFood;