import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const CartItem = ({data}) => {
    const totalItemPrice = data.quantity*data.price;

    return (
        <div className='cartItem col-12'>
            <div className='row cartItemBody'>
                <div className='cartImage col-3'>
                    <img src={data.image} alt={data.title} />
                </div>
                <div className='cartDescription col-6'>
                    <h3>{data.title}</h3>
                    <p>{data.quantity} x ${data.price}</p>
                </div>
                <div className='cartControl col-3'>
                    <button className='trashItem'>
                        <FontAwesomeIcon icon={faTrashAlt}/>
                    </button>
                </div>
            </div>
            <div className='row'>
                <div className='itemPrice'>
                    <p>${totalItemPrice}</p>
                </div>
            </div>
        </div>
    )
}

export default CartItem