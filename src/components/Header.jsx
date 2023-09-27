import { NavLink } from "react-router-dom"
function componentName() {
    return (
        <div>
            <div className="flex">
                <div>
                    The Meal DB
                </div>
                <div>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/About'>About</NavLink>
                    <NavLink to='/Contact'>Contact</NavLink>  
                </div>
            </div>
        </div>
    )
}

export default componentName
