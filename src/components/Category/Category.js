import React from 'react'
import { Link } from 'react-router-dom'
import image from '../Category/image/silla_category.png'
import image1 from '../Category/image/sillones_category.png'

const Category = () => {
    return (
        <div className='categoryContainer container'>
                <h2>Categorias</h2>
                <div className='categoryList '>
                        <Link className="category c-1" to="/category/electronics">
                                <span className='categoryName'>Sillones</span>
                                <div className='imageCategory'>
                                        <img  src={image1} alt='category 1'/>
                                </div>
                        </Link>
                        <Link className="category c-2" to="/category/men's%20clothing">
                                <span className='categoryName'>Sillas</span>
                                <div className='imageCategory'>
                                        <img  src={image} alt='category 1'/>
                                </div>
                        </Link>
                        <Link className="category c-3" to="/category/women's%20clothing">
                                <span className='categoryName'>Mesas</span>
                                <img className='imageCategory' src={image} alt='category 1'/>
                        </Link>
                        <Link className="category c-4" to="/category/jewelery">
                                <span className='categoryName'>Racks de Tv</span>
                                <img className='imageCategory' src={image} alt='category 1'/>           
                        </Link>
                </div>
        </div>
    )
}

export default Category