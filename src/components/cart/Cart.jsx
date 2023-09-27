import React, { useEffect, useState } from 'react';
import CartItem from '../cartItem/CartItem';

const Cart = () => {
//     const carts = JSON.parse(localStorage.getItem('item'));
//    carts.map(cart=>console.log(cart))
    const [cartItems,setCartItems] = useState([]);
    const [noCart,setNocart] = useState(false);
    const [isShow,setIsShow] = useState(false)

    useEffect(()=>{
        const Items = JSON.parse(localStorage.getItem('item'));
        if(Items){
            setCartItems(Items);
        }else{
            setNocart('No Data Found')
    }
    
},[])
    return (
        <div className='max-w-screen-2xl mx-auto py-10'>
            <h1 className='text-5xl font-bold text-sky-600 text-center py-10'>Your Cart Item</h1>
            {
                noCart?<p className='text-center text-4xl font-bold pt-40'>{noCart}</p>
                :
                <div className='grid md:grid-cols-2 md:px-20 pt-10 gap-6 mb-6'>
                    {
                       isShow?cartItems.map(cartitem =><CartItem cartitem ={cartitem} key={cartitem.idMeal}></CartItem>)
                       :
                       cartItems.slice(0,4).map(cartitem =><CartItem cartitem ={cartitem} key={cartitem.idMeal}></CartItem>)
                        
                    }
                </div>
            }
            {
                (cartItems.length > 4 ) && (

                    <button className='block mx-auto px-5 py-2 bg-green-600 rounded-lg text-white font-bold ' onClick={() => setIsShow(!isShow)}>{isShow?'See Less':'See ALL'}</button>
                )
            }
        </div>
    );
};

export default Cart;