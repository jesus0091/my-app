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

    
    return (
            <div className='container cartView'>
                {
                cart.length === 0 ? <CartEmpty/> : 
                <div>
                    <button className='clearCart' onClick={clear}>Vaciar Carrito</button>
                    <div className='cartContainer'>
                        {itemCart.map((item) => {
                            return (
                            <CartItem key={item.id} data={item} removeItem={removeItem}/>
                            );
                        })}
                    </div>
                    <p className='totalSum'>Total: ${itemCart.reduce(( acc, item ) => {return acc+= item.price*item.quantity }, 0)}
                    </p>
                </div>
                }
                <Link to='/pay'>
                    <button className='clearCart' onClick={clear}>Ir a pagar</button>
                </Link>
            </div>

    )
}

export default Cart
