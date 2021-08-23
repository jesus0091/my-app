import React from 'react'
import image from '../Category/image/silla_category.png'
import image1 from '../Category/image/sillones_category.png'

const Category = () => {
    return (
        <div className='categoryContainer container'>
                <h2>Categorias</h2>
                <div className='categoryList '>
                        <a className='category c-1' href="/#">
                                <span className='categoryName'>Sillones</span>
                                <div className='imageCategory'>
                                        <img  src={image1} alt='category 1'/>
                                </div>
                        </a>
                        <a className='category c-2' href="/#">
                                <span className='categoryName'>Sillas</span>
                                <div className='imageCategory'>
                                        <img  src={image} alt='category 1'/>
                                </div>
                        </a>
                        <a className='category c-3' href="/#">
                                <span className='categoryName'>Mesas</span>
                                <img className='imageCategory' src={image} alt='category 1'/>
                        </a>
                        <a className='category c-4' href="/#">
                                <span className='categoryName'>Racks de Tv</span>
                                <img className='imageCategory' src={image} alt='category 1'/>           
                        </a>
                </div>
        </div>
    )
}

export default Category