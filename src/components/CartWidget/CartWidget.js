import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { useCartContext } from '../../context/CartContext'
import { NavLink } from 'react-router-dom'


const CartWidget = () => {

    const { cart } = useCartContext();
    
    const totalItems = cart.reduce((acc, item) => {
        return acc + item.quantity;
    }, 0);

    return (
        <div className='cartWidget'>
            <NavLink className='p-0 cartLink' to='/cart'>
                <FontAwesomeIcon  icon={faShoppingCart} />
            </NavLink>
            {totalItems !== 0 && <span className='cartBadge'>{totalItems}</span>}
        </div>
    )
}

export default CartWidget