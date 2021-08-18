import React from 'react'
import Item from '../Item/Item'
import { Container } from 'react-bootstrap'

const ItemList = ( props ) => {

    return(
        <Container className='containerProducts'>{
                props.products.map((product) => {
                    return (
                        
                            <Item product={product} key={product.id}/>
                        
                    )
                })
        }</Container>
    )
}

export default ItemList
