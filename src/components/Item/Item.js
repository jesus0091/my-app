import React from 'react'

const Item = ({product}) => {
    const format = (num) => {
        const n = String(num),
        p = n.indexOf('.')
        return n.replace(
            /\d(?=(?:\d{3})+(?:\.|$))/g,
            (m, i) => p < 0 || i < p ? `${m}.` : m
            )
        }
    const priceFormat = format(product.price);
    return (
        <div className='cardProduct container-fluid'>
            <div className='row'>
                <div className='col-4 col-lg-12 imageProduct'>
                    <img src={product.image} alt={product.id}/>
                </div>
                <div className='cardBody col-8 col-lg-12'>
                    <p className='cardCategory'>{product.category}</p>
                    <h3 className='cardTitle'>{product.title}</h3>
                    <span className='cardPrice'>$ {priceFormat}</span>
                </div>
            </div>
        </div>
    )
}
export default Item