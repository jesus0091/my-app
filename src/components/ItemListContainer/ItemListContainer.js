import React, { useState, useEffect, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { db } from "../../Firebase";
import { collection, query, getDocs } from "@firebase/firestore";
import Spinner from "../Spinner/Spinner";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [load, setLoad] = useState(true);
    const items = useContext(CartContext);
    console.log('items', items)

    const getproducts = async () => {
        const dataFirebase = [];
        const q = query( collection( db, "products" ));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
        dataFirebase.push({ ...doc.data(), id: doc.id });
        });
        setProducts(dataFirebase);
        setLoad(false);
      };
      useEffect(() => {
        setTimeout(() => {
            getproducts();
            }, 0);
      }, []);

  return <div>{load ? <Spinner /> : <ItemList products={products} />}</div>;
};

export default ItemListContainer;
