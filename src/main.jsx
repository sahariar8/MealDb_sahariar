import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './components/Home.jsx'
import About from './components/About'
import Contact from './components/Contact'
import Faq from './components/Faq'
import AllFood from './components/AllFood'
import Beef from './components/Beef'
import BeefDetails from './components/BeefDetails'
import Chicken from './components/chicken/Chicken'
import Desert from './components/desert/Desert'
import DesertDetails from './components/desert/DesertDetails'
import Miscellaneous from './components/Miscellaneous/Miscellaneous'
import MiscellaneousDetails from './components/Miscellaneous/MiscellaneousDetails'
import Lamb from './components/Lamb/Lamb'
import LambDetails from './components/Lamb/LambDetails'
import Pasta from './components/pasta/Pasta'
import PastaDetails from './components/pasta/PastaDetails'
import Pork from './components/Pork/Pork'
import PorkDetails from './components/Pork/PorkDetails'
import Seafood from './components/seafood/Seafood'
import SeafoodDetails from './components/seafood/SeafoodDetails'
import Side from './components/side/Side'
import SideDetails from './components/side/SideDetails'
import Starter from './components/starter/Starter'
import StarterDetails from './components/starter/StarterDetails'
import Vegan from './components/Vegan/Vegan'
import VeganDetails from './components/Vegan/VeganDetails'
import Vegetarian from './components/Vegetarian/Vegetarian'
import VegetarianDetails from './components/Vegetarian/VegetarianDetails'
import Breakfast from './components/breakfast/Breakfast'
import BreakfastDetails from './components/breakfast/BreakfastDetails'
import Goat from './components/Goat/Goat'
import GoatDetails from './components/Goat/GoatDetails'
import CategoryDetails from './components/categoryDetails/CategoryDetails'
import Cart from './components/cart/Cart'
import ChickenDetails from './components/chicken/ChickenDetails'


const router = createBrowserRouter([
  {
    path:'/',
    element:<Home></Home>,
    children:[
      {
        path:'/About',
        element:<About></About>
      },
      {
        path:'/Contact',
        element:<Contact></Contact>
      },
      {
        path:'/Faq',
        element:<Faq></Faq>
      },
      {
        path:'/',
        loader:()=>fetch('https://www.themealdb.com/api/json/v1/1/categories.php'),
        element:<AllFood></AllFood>
      },
      {
        path:'/details/:id',
        loader:()=>fetch('https://www.themealdb.com/api/json/v1/1/categories.php'),
        element:<CategoryDetails></CategoryDetails>
      },
      {
        path:'/Beef',
        loader:()=> fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef'),
        element:<Beef></Beef>
      },
      {
        path:'/Beef/:Id',
        loader:({params})=> fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.Id}`),
        element:<BeefDetails></BeefDetails>
      },
      {
        path:'/cart/:Id',
        loader:({params})=> fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.Id}`),
        element:<Cart></Cart>
      },
      {
        path:'/Chicken',
        loader:()=> fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken'),
        element:<Chicken></Chicken>
      },
      {
        path:'/Chicken/:Id',
        loader:({params})=> fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.Id}`),
        element:<ChickenDetails></ChickenDetails>
      },
      {
        path:'/cart/:Id',
        loader:({params})=> fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.Id}`),
        element:<Cart></Cart>
      },
      {
        path:'/Dessert',
        loader:()=> fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert'),
        element:<Desert></Desert>
      },
      {
        path:'/Dessert/:Id',
        loader:({params})=> fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.Id}`),
        element:<DesertDetails></DesertDetails>
      },
      {
        path:'/cart/:Id',
        loader:({params})=> fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.Id}`),
        element:<Cart></Cart>
      },
      {
        path:'/Miscellaneous',
        loader:()=> fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Miscellaneous'),
        element:<Miscellaneous></Miscellaneous>
      },
      {
        path:'/Miscellaneous/:Id',
        loader:({params})=> fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.Id}`),
        element:<MiscellaneousDetails></MiscellaneousDetails>
      },
      {
        path:'/cart/:Id',
        loader:({params})=> fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.Id}`),
        element:<Cart></Cart>
      },
      {
        path:'/Lamb',
        loader:()=> fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Lamb'),
        element:<Lamb></Lamb>
      },
      {
        path:'/Lamb/:Id',
        loader:({params})=> fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.Id}`),
        element:<LambDetails></LambDetails>
      },
      {
        path:'/cart/:Id',
        loader:({params})=> fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.Id}`),
        element:<Cart></Cart>
      },
      {
        path:'/Pasta',
        loader:()=> fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=pasta'),
        element:<Pasta></Pasta>
      },
      {
        path:'/Pasta/:Id',
        loader:({params})=> fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.Id}`),
        element:<PastaDetails></PastaDetails>
      },
      {
        path:'/cart/:Id',
        loader:({params})=> fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.Id}`),
        element:<Cart></Cart>
      },
      {
        path:'/Pork',
        loader:()=> fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=pork'),
        element:<Pork></Pork>
      },
      {
        path:'/Pork/:Id',
        loader:({params})=> fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.Id}`),
        element:<PorkDetails></PorkDetails>
      },
      {
        path:'/cart/:Id',
        loader:({params})=> fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.Id}`),
        element:<Cart></Cart>
      },
      {
        path:'/Seafood',
        loader:()=> fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=seafood'),
        element:<Seafood></Seafood>
      },
      {
        path:'/Seafood/:Id',
        loader:({params})=> fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.Id}`),
        element:<SeafoodDetails></SeafoodDetails>
      },
      {
        path:'/cart/:Id',
        loader:({params})=> fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.Id}`),
        element:<Cart></Cart>
      },
      {
        path:'/Side',
        loader:()=> fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=side'),
        element:<Side></Side>
      },
      {
        path:'/Side/:Id',
        loader:({params})=> fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.Id}`),
        element:<SideDetails></SideDetails>
      },
      {
        path:'/cart/:Id',
        loader:({params})=> fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.Id}`),
        element:<Cart></Cart>
      },
      {
        path:'/Starter',
        loader:()=> fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=starter'),
        element:<Starter></Starter>
      },
      {
        path:'/Starter/:Id',
        loader:({params})=> fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.Id}`),
        element:<StarterDetails></StarterDetails>
      },
      {
        path:'/cart/:Id',
        loader:({params})=> fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.Id}`),
        element:<Cart></Cart>
      },
      {
        path:'/Vegan',
        loader:()=> fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=vegan'),
        element:<Vegan></Vegan>
      },
      {
        path:'/Vegan/:Id',
        loader:({params})=> fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.Id}`),
        element:<VeganDetails></VeganDetails>
      },
      {
        path:'/cart/:Id',
        loader:({params})=> fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.Id}`),
        element:<Cart></Cart>
      },
      {
        path:'/Vegetarian',
        loader:()=> fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=vegetarian'),
        element:<Vegetarian></Vegetarian>
      },
      {
        path:'/Vegetarian/:Id',
        loader:({params})=> fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.Id}`),
        element:<VegetarianDetails></VegetarianDetails>
      },
      {
        path:'/cart/:Id',
        loader:({params})=> fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.Id}`),
        element:<Cart></Cart>
      },
      {
        path:'/Breakfast',
        loader:()=> fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=breakfast'),
        element:<Breakfast></Breakfast>
      },
      {
        path:'/Breakfast/:Id',
        loader:({params})=> fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.Id}`),
        element:<BreakfastDetails></BreakfastDetails>
      },
      {
        path:'/cart/:Id',
        loader:({params})=> fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.Id}`),
        element:<Cart></Cart>
      },
      {
        path:'/Goat',
        loader:()=> fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=goat'),
        element:<Goat></Goat>
      },
      {
        path:'/Goat/:Id',
        loader:({params})=> fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.Id}`),
        element:<GoatDetails></GoatDetails>
      },
      {
        path:'/cart/:Id',
        loader:({params})=> fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.Id}`),
        element:<Cart></Cart>
      },
      
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
