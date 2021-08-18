import React, {useState, useEffect} from 'react';
import ItemList from '../ItemList/ItemList';



const ItemListContainer = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {

        fetch('https://fakestoreapi.com/products')
            .then((response) => {
                console.log(response)
                return response.json();
            })
            .then((data) => {
                console.log(data)
                setProducts(data)
            })

    }, [])

    return (
        <ItemList products={products}/>                    
    )
}

export default ItemListContainer

// Notas:
// fetch('data.json'...... El archivo data.json tiene que estar en la carpeta PUBLIC
// fetch('test.json')
//       .then(r => r.json())
//       .then(j => console.log(j));
