import React, { useState, useEffect, useContext } from "react";
import Spinner from "../Spinner/Spinner";
import ItemList from "../ItemList/ItemList";
import { CartContext } from "../../context/CartContext";

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [load, setLoad] = useState(true);
    const items = useContext(CartContext);
    console.log('items', items)
    
    useEffect(() => {
        setTimeout(() => {
        fetch("https://fakestoreapi.com/products")
            .then((response) => {
            return response.json();
            })
            .then((data) => {
            setProducts(data);
            setLoad(false);
            });
        }, 2000);
  }, []);

  return <div>{load ? <Spinner /> : <ItemList products={products} />}</div>;
};

export default ItemListContainer;
