import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import CartEmpty from './CartEmpty/CartEmpty';
import CartItem from './CartItem/CartItem'

const Cart = () => {
    
    const {cart, clear, removeItem} = useContext(CartContext);
    const [itemCart, setItemCart] = useState([]);
    // const [empty, setEmpty] = useState(true)
    
    useEffect(() => {
        setItemCart(cart);
        // setEmpty(false)
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
                            <CartItem key={item.Id} data={item} removeItem={removeItem}/>
                            );
                        })}
                    </div>
                </div>
                }
            </div>

    )
}

export default Cart
