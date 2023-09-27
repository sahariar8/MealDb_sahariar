
import { NavLink, Outlet } from "react-router-dom";
import './syle.css'


const Home = () => {
    return (
        <div className="max-w-screen-2xl mx-auto  ">
            <div className='flex justify-between px-4 md:px-10 shadow-lg py-2 font-bold text-lg'>
                <div>
                    <h1 className="text-amber-600 font-serif text-3xl font-bold">The Meal DB</h1>
                </div>
                <div className="flex gap-2 md:gap-10 font-semibold">
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/About'>About</NavLink>
                    <NavLink to='/Contact'>Contact</NavLink>
                    <NavLink to='/Faq'>Faq</NavLink>
                </div>
            </div>
            <Outlet></Outlet>

            
            
        </div>
    );
};

export default Home;