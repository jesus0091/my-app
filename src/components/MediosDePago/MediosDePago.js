import React from 'react'
import visa from './image/visa.png';
import masterCard from './image/Mastercard.svg';
import { faCreditCard, faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MediosDePago = () => {
    return (
        <div className=''>
        <h3 className='titleMP'>Medios de pago</h3>
        <table className='tableMP'>
            <tr>
                <td><FontAwesomeIcon icon={faCreditCard} /></td>
                <td>
                    <span>Tarjetas de débito y crédito </span>
                </td>
                <td><ul className='listDC'>
                        <li><img src={visa} alt='' /></li>
                        <li><img src={masterCard} alt='' /></li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td><FontAwesomeIcon icon={faMoneyBill} /></td>
                <td><span>Efectivo</span></td>
            </tr>
        </table>
        </div>
    )
}

export default MediosDePago
