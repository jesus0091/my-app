import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const ItemCount = ({stock, initial, product, onAdd}) => {

    const [number, setNumber] = React.useState(initial);
    const handleDown = () => {
        (number === 1)? setNumber(number) : setNumber (number - 1);
    };
    const handleUp = () => {
        (number === stock)? setNumber(stock) : setNumber(number + 1);
    };
    
    return (
        <div className="itemCount" >
            <div className='countButtons'>
                <button className='buttonCount' onClick={handleDown}>
                    <FontAwesomeIcon icon={faMinus} />
                </button>
                <span>{number}</span>
                <button className='buttonCount' onClick={handleUp}>
                    <FontAwesomeIcon icon={faPlus} />
                </button>
            </div>
            <button 
                type='button' 
                className='addToCart' 
                onClick={()=> onAdd(number)}>
                    <FontAwesomeIcon icon={faShoppingCart} />
                    <span>Agregar</span>
            </button>
        </div>
    );
}
export default ItemCount
