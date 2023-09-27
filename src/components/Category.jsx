import { Link } from 'react-router-dom'
const Category = ({item}) => {
    const {strCategory,strCategoryThumb,idCategory} = item;
    return (
            <div className="pt-10">
               <Link to={`/details/${idCategory}`}>
                <div className="card bg-base-100 shadow-xl">
                        <figure><img src={strCategoryThumb} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{strCategory}</h2>
                        </div>
                    </div>
                </Link>
          
            </div>
    );
};

export default Category;