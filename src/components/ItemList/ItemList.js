import React from 'react'
import { Link } from 'react-router-dom'
import Item from '../Item/Item'

const ItemList = ( props ) => {
    return(
        <div className='container '>
            <h2 className='containerTitle'>Productos</h2>
            <div className='containerProducts'>{
                props.products.map((product) => {
                    return (
                        <Link className='itemLink' to={`/detail/${product.id}`}>
                            <Item product={product} key={product.id}/>
                        </Link>
                    )
                })
            }</div>
        </div>
    )
}

export default ItemList