import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const CartWidget = () => {

    // const { cart } = useCartContext();
    
    // const totalItems = cart.reduce((acc, item) => {
    //     return acc + item.quantity;
    // }, 0);

    return (
        <div>
            <FontAwesomeIcon icon={faShoppingCart} />
            {/* <span>{totalItems}</span> */}
        </div>
    )
}

export default CartWidget