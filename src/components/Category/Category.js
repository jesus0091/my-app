import React from 'react'
import { Link } from 'react-router-dom'
import image from '../Category/image/silla_category.png'
import image1 from '../Category/image/sillones_category.png'
import image2 from '../Category/image/racktv.png'
import image3 from '../Category/image/mesa.png'

const Category = () => {
    return (
        <div className='categoryContainer container'>
                <h2>Categorias</h2>
                <div className='categoryList '>
                        <Link className="category c-1" to="/category/Sillones">
                                <span className='categoryName'>Sillones</span>
                                <div className='imageCategory'>
                                        <img  src={image1} alt='category 1'/>
                                </div>
                        </Link>
                        <Link className="category c-2" to="/category/Sillas">
                                <span className='categoryName'>Sillas</span>
                                <div className='imageCategory'>
                                        <img  src={image} alt='category 1'/>
                                </div>
                        </Link>
                        <Link className="category c-3" to="/category/Mesas">
                                <span className='categoryName'>Mesas</span>
                                <div className='imageCategory'>
                                        <img  src={image3} alt='category 1'/>
                                </div>
                        </Link>
                        <Link className="category c-4" to="/category/Racks">
                                <span className='categoryName'>Racks de Tv</span>
                                <div className='imageCategory'>
                                        <img  src={image2} alt='category 1'/>
                                </div>           
                        </Link>
                </div>
        </div>
    )
}

export default Category