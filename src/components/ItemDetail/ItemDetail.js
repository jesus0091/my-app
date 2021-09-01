import React, {useState} from 'react'
import { Container } from 'react-bootstrap'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'

const ItemDetail = ({ product, stock=5 }) => {

    const [number, setNumber] = useState(null)
    const onAdd = (value) => {
        value > 0? setNumber(value) : alert("Prueba")
    }

    return (
        <Container>
            <div className='detailCard'>
                <div className='imgViewP'>
                    <img className='imgDetail' src={product.image} alt='Producto ' />
                </div>
                <div className='detailBody'>
                    <h2>{product.title}</h2>
                    <p>${product.price}</p>
                    <p>Quedan {stock-number} disponibles!</p>
                    {
                        number === null? (
                            <ItemCount 
                            initial={1}
                            stock={stock}
                            product={product}
                            onAdd = {onAdd}
                            />
                        ):(
                            <Link type="button" className="btn btn-success" to="/cart">
                                Termina Compra
                            </Link>
                        )
                    }
                    
                    
                    
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

