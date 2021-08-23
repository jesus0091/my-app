import React from 'react'
import Item from '../Item/Item'

const ItemList = ( props ) => {

    return(
        <div className='container '>
            <h2 className='containerTitle'>Productos</h2>
            <div className='containerProducts'>{
                props.products.map((product) => {
                    return (
                        <Item product={product} key={product.id}/>
                    )
                })
            }</div>
        </div>
    )
}

export default ItemList
