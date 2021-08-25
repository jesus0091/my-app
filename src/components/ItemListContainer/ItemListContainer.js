import React, {useState, useEffect} from 'react';
import Spinner  from '../Spinner/Spinner';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = () => {

    const [products, setProducts] = useState([]);
    const [load, setLoad] = useState(true)
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
                    setLoad(false)
                })
        }, 2000);
    }, [])

    return (
        <div>
            { load ? <Spinner />: <ItemList products={products}/>  }           
        </div>
    )
}

export default ItemListContainer