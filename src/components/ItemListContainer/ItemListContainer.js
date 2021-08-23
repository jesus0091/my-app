import React, {useState, useEffect} from 'react';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            fetch('https://fakestoreapi.com/products')
                .then((response) => {
                    console.log(response)
                    return response.json();
                })
                .then((data) => {
                    console.log(data)
                    setProducts(data)
                })
        }, 2000);
    }, [])

    return (
        <div>

        <h2>Productos</h2>
            <ItemList products={products}/>              
        </div>
    )
}

export default ItemListContainer