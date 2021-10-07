import { faCalendar, faLock, faTruckMoving, faUndo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, {useState} from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'
import ItemCount from '../ItemCount/ItemCount'
import MediosDePago from '../MediosDePago/MediosDePago'

const ItemDetail = ({ product }) => {

    const {addToCart} = useCartContext();
    console.log('addToCart', addToCart)

    const [number, setNumber] = useState(null)
    const onAdd = (value) => {
        addToCart( product , value)
        value > 0? setNumber(value) : alert("Prueba")
    }
    const format = (num) => {
        const n = String(num),
        p = n.indexOf('.')
        return n.replace(
            /\d(?=(?:\d{3})+(?:\.|$))/g,
            (m, i) => p < 0 || i < p ? `${m}.` : m
            )
        }
    const priceFormat = format(product.price);

;

    return (
        <Container>
            <div className='detailCard row m-0'>
                <div className='col-12 col-md-6 offset-0 offset-md-1 imgViewP'>
                    <img className='imgDetail' src={product.image} alt='Producto' />
                </div>
                <div className='col-12 col-md-4 offset-0 offset-md-1 detailBody'>
                    <p className='order-md-1'>{product.category}</p>
                    <h2 className='order-md-2'>{product.title}</h2>
                    <p className='order-md-3'>${priceFormat}</p>
                    <p className='order-md-4'>en <span>18x {product.price/18} sin interés</span></p>
                    <p className='order-md-5'>Quedan {product.stock-number} disponibles</p>
                    {
                        number === null? (
                            <ItemCount 
                            initial={1}
                            stock={product.stock}
                            product={product}
                            onAdd = {onAdd}
                            />
                        ):(
                            <Link type="button " className="finished" to="/cart">
                                Terminar Compra
                            </Link>
                        )
                    } 
                    <div class="mediosDePago">    
                        <table>
                            <tr>
                                <td><FontAwesomeIcon className='iconMP' icon={faTruckMoving} /></td>
                                <td><span>Envíos a todo el país</span></td>
                            </tr>
                            <tr>
                                <td><FontAwesomeIcon className='iconMP' icon={faUndo} /></td>
                                <td><span>Devolucion gratis</span>, tienes 30 dias desde que recibes el producto para devolverlo. No importa el motivo</td>
                            </tr>
                            <tr>
                                <td><FontAwesomeIcon className='iconMP' icon={faLock} /></td>
                                <td><span>Compra protegida</span>, Si hay algún problema o no recibes el producto tal como lo compraste, te devolvemos el dinero que pagaste.</td>
                            </tr>
                            <tr>
                                <td><FontAwesomeIcon className='iconMP' icon={faCalendar} /></td>
                                <td><span>12 meses de garantía</span></td>
                            </tr>
                        </table>
                    </div>        
                </div>
            </div>
            <div className='detailDescription'>
                <div className='row mx-0'>
                    <div className='col-12 col-md-8 dP'>
                        <h3>Descripción</h3>
                        <p>{product.description}</p>
                    </div>
                    <div className='col-12 col-md-4 mP'>
                        <MediosDePago />
                    </div>
                </div>
            </div>
            <div className='detailPub row mx-0'>
                    <div className='col-12'>
                        <p>Publicación: <span>#{product.id}</span></p>
                    </div>
            </div>
        </Container>    
    )
}

export default ItemDetail

