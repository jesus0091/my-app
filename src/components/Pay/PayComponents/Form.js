import React, { useContext, useState} from "react";
import { CartContext } from "../../../context/CartContext";
import { collection, Timestamp, addDoc } from "firebase/firestore";
import { db } from "../../../Firebase";
import '@firebase/firestore';
import checkList from '../PayComponents/comprobado.png'

const Form = () => {

    const { cart, cartPrice, clear, format} = useContext(CartContext);
    const [data_usuario, setData_usuario] = useState([])
    const [orden, setOrden] = useState('')
    const priceTotal = cartPrice()
    const orders = collection(db ,'orders')
    const [ticket, setTicket] = useState(false)

    const variaValor = (e) => {
        setData_usuario({ ...data_usuario,
            [e.target.name]: e.target.value
        })
    }

    const submitForm = async (e) => {
        e.preventDefault();
        const newOrder={
            buyer:{
                nombre: data_usuario.nombre,
                apellido: data_usuario.email,
                email: data_usuario.email
            // phone:data_usuario.phone
            },
            items: cart,
            date: Timestamp.now(),
            total: priceTotal,
        }
        const docRef = await addDoc((orders), newOrder)
        setOrden(docRef.id)
        console.log(docRef.id)
        clear()
        setTicket(true)
    }

    return (
        <div className={`container my-1 my-md-5  ${orden ? 'hide' : 'show'}`} key={cart.id}>
            {
                ticket === false ? 
                    <div className='row orderPay'>
                        <div className='col-md-4'>
                            <h2 className='titlePay'>Resumen</h2>
                            { cart.map(item => {return  (
                                            <div className='payItem' key={item.id}>
                                                <p>{item.title}</p>
                                                <p>{item.quantity}x</p>
                                                <p>${format(item.price)}</p>                        
                                            </div> 
                                            )}, )
                                            
                            }
                            <h2 className='priceTotalPay'>Total: <span>${format(priceTotal)}</span></h2>
                        </div>
                        <div className='offset-0 offset-md-1 col-md-7 payment'>
                            <form className='payForm' method='POST' onSubmit={submitForm} >
                                <h2>Ingresa tus datos</h2>
                                <input 
                                    className='inputForm'
                                    onKeyUp={variaValor} 
                                    onBlur={variaValor} 
                                    type="text" 
                                    name="nombre" 
                                    placeholder="Nombre" 
                                />
                                <input
                                    className='inputForm' 
                                    onKeyUp={variaValor} 
                                    onBlur={variaValor} type="text" 
                                    name="apellido" 
                                    placeholder="Apellido" 
                                />
                                <input
                                    className='inputForm' 
                                    onKeyUp={variaValor} 
                                    onBlur={variaValor} type="number" 
                                    name="telefono" 
                                    placeholder="Telefono" 
                                />
                                <input 
                                    className='inputForm'
                                    onKeyUp={variaValor} 
                                    onBlur={variaValor} 
                                    type="email" 
                                    name="email" 
                                    placeholder="E-mail"
                                />
                                <button onSubmit={submitForm}  className="btn btnPay m-3" >
                                    Finalizar compra
                                </button> 
                            </form>
                        </div>
                    </div>
                :
                <>
                    <section class="spikesTop"></section>
                        <div className='ticketPay'>
                            <div className='checkList'>
                                <img src={checkList} alt='checklist'/>
                            </div>
                            <h2>¡Compra exitosa!</h2>
                            <p>Tu numero de orden es:</p>
                            <p>{orden}</p>
                        </div>
                    <section class="spikesBottom"></section>
                </>

            }
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
        
                


                
                
        </div>
        
        
        
    
       
    )
};

export default Form;
