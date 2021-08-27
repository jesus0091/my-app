import React from 'react'

const Item = ({product}) => {
    return (
        <div className='cardProduct container-fluid'>
            <div className='row'>
                <div className='col-4 col-lg-12 imageProduct'>
                    <img src={product.image} alt={product.id}/>
                </div>
                <div className='cardBody col-8 col-lg-12'>
                    <h3 className='cardTitle'>{product.title}</h3>
                    <p className='cardCategory'>{product.category}</p>
                    <span className='cardPrice'>$ {product.price}</span>
                    {/* <span className='cardPrice'>$ {product.discount}</span> */}
                </div>
            </div>
        </div>
    )
}
export default Item