import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PorkDetails = () => {
    const {meals} = useLoaderData();
    const navigate = useNavigate();
    const handleGoBack = () =>{
        navigate(-1);
    }
    const {strMeal,strMealThumb,strInstructions} = meals[0];
 
    return (
        <div>
            <div className="card bg-base-100 shadow-xl flex">
                <figure className="px-10 pt-10">
                    <img src={strMealThumb} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{strMeal}</h2>
                    <p>{strInstructions}</p>
                    <div className="card-actions">
                    <button className="btn btn-primary" onClick ={handleGoBack}>Go Back</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PorkDetails;