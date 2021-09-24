import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../../../context/CartContext";
import { addDoc, collection, updateDoc, doc, Timestamp} from "firebase/firestore";
import { db } from "../../../Firebase";
import Login from "./Login";
import buyer from "./buyer";

const Form = () => {

    const { cart, clear, login } = useContext(CartContext);
    const [items, SetItems] = useState([]);
    const [priceTotal, setPriceTotal] = useState([]);
    const [ticketId, SetTickedId] = useState("");

    useEffect(() => {
        cart.forEach((item) => {
            items.push({
                id: item.id,
                name: item.name,
                quantity: item.quantity,
                price: item.price,
                image: item.image,
            });
            setPriceTotal(
                cart.reduce((acc, item) => {
                return (acc += item.price * item.quantity);
                }, 0)
            );
          SetItems(items);
        });
        console.log(items)
    }, [items, SetItems, cart]);

    // const ticket = async (e) => {
    
    //     if (cart.length > 0) {
    //         e.preventDefault();
            
    //         let obj;
    //         let f = document.getElementById("payForm");
    //         let name = f.name.value;
    //         let phone = f.phone.value;
    //         let email = f.email.value;
    //         let emailx2 = f.emailx2.value;

    //         if ((name !== "" && email !== "" && phone !== "") || login !== {}) {
    //             let buy = new buyer(name, phone, email, items);
    //             login !== {} ? 
    //                 (obj = {
    //                     email: login.email,
    //                     name: login.name,
    //                     items: items,
    //                     price: priceTotal,
    //                     time: Timestamp.fromDate(new Date()),
    //                 })
    //                 : (obj = {
    //                     name: buy.name,
    //                     email: buy.email,
    //                     phone: buy.phone,
    //                     items: items,
    //                     price: priceTotal,
    //                     time: Timestamp.fromDate(new Date()),
    //                 });
    //         if (buy.email !== emailx2) {
    //             return;
    //         }
    //         try {
    //             const docRef = await addDoc(collection(db, "buy"), obj);
    //             // updatestock();
    //             console.log("Document written with ID: ", docRef.id);
    //             SetTickedId(docRef.id);
    //             clear();
    //         } catch (e) {
    //             console.error("Error adding document: ", e);
    //         }
    //     } else {
        
    //     console.log("invalido");
    //     }
    //     } else {
    
    //     }
    // };

    // const updatestock = () => {
    //     cart.forEach(async (item) => {
    //         const washingtonRef = doc(db, "products", item.id);
    //         let nowStock = item.stock - item.quantity;
    //         await updateDoc(washingtonRef, {
    //             Stock: nowStock,
    //         });
    //     });
    //   };

    // const buy = async () => {
    //     const object = {
    //         title: 'testTitle',
    //         description: 'testDescription'
    //     }

    //     await db.collection('buy').doc().set(object);
    //     console.log('producto agregado')
    // }

    return (
        <div className="container w-50  jutify-content-center mt-5 pt-5">
        <form id="payForm" className="d-flex flex-column  mt-5 pt-5 ">
            
            <input
            type="text"
            placeholder="Nombre"
            name="name"
            className="m-3"
            />
                
            <input
            type="email"
            placeholder="Correo electronico"
            name="email"
            className="m-3"
            />

            <input
            type="email"
            placeholder="Repita su email"
            name="emailx2"
            className="m-3"
            />
            
            <input
            type="number"
            placeholder="Celular"
            name="phone"
            className="m-3"
            />
        </form>
        <button>

        <Login />
        </button>

        
        <button
            type="submit"
            placeholder="submit"
            // onClick={ticket}
            className="btn btn-primary m-3"
            value="finalizar"
        >
            Finalizar compra
        </button>
    
        </div>
    );
};

export default Form;
