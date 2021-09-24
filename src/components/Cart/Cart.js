import { faHandHoldingUsd, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext'
import CartEmpty from './CartEmpty/CartEmpty';
import CartItem from './CartItem/CartItem'

const Cart = () => {
    
    const {cart, clear, removeItem} = useContext(CartContext);
    const [itemCart, setItemCart] = useState([]);
    
    useEffect(() => {
        setItemCart(cart);
    }, [cart])

    const priceTotal = itemCart.reduce(( acc, item ) => {return acc+= item.price*item.quantity }, 0);
    
    return (
            <div className='container cartView'>
                {
                cart.length === 0 ? <CartEmpty/> : 
                <div>
                    <div className='cartContainer'>
                        {itemCart.map((item) => {
                            return (
                            <CartItem key={item.id} data={item} removeItem={removeItem}/>
                            );
                        })}
                    </div>
                    <p className='totalSum'>Total: ${priceTotal}
                    </p>
                </div>
                }
                <div className='buttonsCart'>
                    <button className='clearCart' onClick={clear}>
                        <FontAwesomeIcon icon={faTrash}/>
                        {/* <span>Vaciar</span> */}
                    </button>
                    <Link type='button' className='payCart' to='/pay' >
                        
                            <FontAwesomeIcon icon={faHandHoldingUsd} />
                            <span>Pagar - Total: ${priceTotal}</span>
                    </Link>
                </div>
            </div>

    )
}

export default Cart
