import React from 'react'

const CartItem = ({data}) => {
    return (
        <div className='cartItem'>
            <div>
                {/* <img src={data.image} alt={data.title} /> */}
            </div>
            <div>
                <h3>{data.title}</h3>
                <p>{data.quantity}</p>
            </div>
            <button>x</button>
        </div>
    )
}

export default CartItem