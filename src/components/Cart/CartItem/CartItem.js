import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const CartItem = ({data, removeItem}) => {
    const removeId = () => {
        removeItem(data.id)
    }
    const totalItemPrice = data.quantity*data.price;

    const format = (num) => {
        const n = String(num),
        p = n.indexOf('.')
        return n.replace(
            /\d(?=(?:\d{3})+(?:\.|$))/g,
            (m, i) => p < 0 || i < p ? `${m}.` : m
            )
        }

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
                    <button className='trashItem' onClick={removeId}>
                        <FontAwesomeIcon icon={faTrashAlt}/>
                    </button>
                </div>
            </div>
            <div className='row'>
                <div className='itemPrice'>
                    <p>${format(totalItemPrice)}</p>
                </div>
            </div>
        </div>
    )
}

export default CartItem