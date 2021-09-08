import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import CartItem from './CartItem/CartItem'

const Cart = () => {
    const {cart, clear} = useContext(CartContext);
    const [itemCart, setItemCart] = useState([]);
    useEffect(() => {
        setItemCart(cart);
    }, [cart])
    return (
        <div className='container cartView'>
            <button className='clearCart' onClick={clear}>Vaciar Carrito</button>
            <div className='cartContainer'>
                {itemCart.map((item) => {
                    return (
                    <CartItem key={item.Id} data={item} />
                    );
                })}
            </div>
        </div>
    )
}

export default Cart
