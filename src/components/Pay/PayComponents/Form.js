import React, { useContext, useState} from "react";
import { CartContext } from "../../../context/CartContext";
import { collection, Timestamp, addDoc } from "firebase/firestore";
import { db } from "../../../Firebase";
import '@firebase/firestore';
//import buyer from "./buyer";

const Form = () => {

    const { cart, cartPrice, clear} = useContext(CartContext);
    const [data_usuario, setData_usuario] = useState([])
    const [orden, setOrden] = useState('')
    const priceTotal = cartPrice()
    const orders = collection(db ,'orders')

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
    }

    return (
        <div className={`container ${orden ? 'hide' : 'show'}`} key={cart.id}>
        <h1>Checkout</h1>
       { cart.map(item => {return  (
                    <div key={item.id}>
                        <h3>{item.title}</h3>
                        <p> ${item.price} x {item.quantity}</p>
                        <p>Codigo: {item.id} </p> 
                        
                     </div> 
                    
                     )}, )
                    
       }
       
       <h2>Total: $ {priceTotal} </h2>
       
       <form method='POST' onSubmit={submitForm} >
            <input 
                onKeyUp={variaValor} 
                onBlur={variaValor} 
                type="text" 
                name="nombre" 
                placeholder="Nombre" 
            />
            <input 
                onKeyUp={variaValor} 
                onBlur={variaValor} type="text" 
                name="apellido" 
                placeholder="Apellido" 
            />
            <input 
                onKeyUp={variaValor} 
                onBlur={variaValor} 
                type="email" 
                name="email" 
                placeholder="E-mail"
            />
            <button onSubmit={submitForm}  className="btn btn-primary m-3" >
                Finalizar compra
            </button> 
        </form>
       
        <div className={`compraFinalizada  ${orden ? 'show' : 'hide'}` }>
        <h2>¡Compra exitosa! Este es tu numero de seguimiento: {orden} por el total de {priceTotal}</h2>
                
        </div>;
        
        
    
       </div>
    )
};

export default Form;
