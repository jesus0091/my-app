import React, {useState} from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({ product, stock=5 }) => {

    const {addToCart} = useCartContext();
    console.log('addToCart', addToCart)

    const [number, setNumber] = useState(null)
    const onAdd = (value) => {
        addToCart( product , value)
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
                            <Link type="button" className="btn btn-success" to="./cart">
                                Terminar Compra
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

