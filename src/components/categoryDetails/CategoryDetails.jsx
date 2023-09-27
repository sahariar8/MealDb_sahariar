
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';

const CategoryDetails = () => {
    const {id} = useParams();
    console.log(id);
   
    const {categories} = useLoaderData();
    console.log(categories)
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1)
    }
    const categoryFind = categories.find(category => category.idCategory == id);
    console.log(categoryFind)
    const {strCategory,strCategoryThumb,strCategoryDescription} = categoryFind;
    
    

    return (
        <div>
             <div>
            <div className="card bg-base-100 shadow-xl flex">
                <figure className="px-10 pt-20">
                    <img src={strCategoryThumb} alt="Shoes" className="rounded-xl h-[400px]" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-3xl">{strCategory}</h2>
                    <p className='pt-5'>{strCategoryDescription}</p>
                    <div className="card-actions pt-5">
                    <button className="btn btn-primary text-white" onClick ={handleGoBack}>Go Back</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default CategoryDetails;