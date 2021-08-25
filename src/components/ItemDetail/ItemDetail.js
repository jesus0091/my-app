import React from 'react'
import { Container } from 'react-bootstrap'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({product}) => {
    return (
        
            <Container>
                <div className='detailCard'>
                    <div className='imgViewP'>
                        <img className='imgDetail' src={product.image} alt='Producto ' />
                    </div>
                    <div className='detailBody'>
                        <h2>{product.title}</h2>
                        <p>${product.price}</p>
                        <ItemCount stock={5} initial={1}/>
                    </div>
                </div>
                <div className='detailDescription'>
                    <h3>Descripcion</h3>
                    <p>{product.description}</p>
                </div>
            </Container>    
        
    )
}

export default ItemDetail

