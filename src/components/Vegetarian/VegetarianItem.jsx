import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const VegetarianItem = ({meal}) => {
    const {idMeal,strMeal,strMealThumb} = meal;

    const handleButton = ()=>{
        const allCartItem = [];
        const cart = JSON.parse(localStorage.getItem('item'));
        if(!cart){
            allCartItem.push(meal);
            localStorage.setItem('item',JSON.stringify(allCartItem));
            Swal.fire(
                'Done!',
                'Your food added to Cart Successfully!',
                'success'
              )
        }else{
            allCartItem.push(...cart,meal);
            localStorage.setItem('item',JSON.stringify(allCartItem))
            Swal.fire(
                'Done!',
                'Your food added to Cart Successfully!',
                'success'
              )
        }
    }
   
    return (
        <div>
            
            <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
               <div>
                    <a href="#">
                        <img className="rounded-lg h-100" src={strMealThumb} alt="" />
                    </a>
               </div>
                <div className="p-2">
                    <a href="#">
                        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{strMeal.slice(0,30)}</h5>
                    </a>
                    <div className="flex justify-between ">
                        <Link to={`/Vegetarian/${idMeal}`}><button className="btn btn-primary text-white">Show Details</button></Link>
                        <Link to={`/cart/${idMeal}`}><button className="btn btn-warning font-bold" onClick={handleButton}>Add To Cart</button></Link>
                   </div>
                  
                </div>
            </div>

        </div>
    );
};

export default VegetarianItem;