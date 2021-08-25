import React, { useState, useEffect} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = ({ match }) => {
    let productId = match.params.id;
    const [product, setProduct] = useState({});

    console.log(product)
    useEffect(() => {
        setTimeout(() => {
            fetch(`https://fakestoreapi.com/products/${productId}`)
                .then((response) => {
                    console.log(response)
                    return response.json();
                })
                .then((data) => {
                    console.log(data)
                    setProduct(data)
                })
        }, 1500);
    }, [productId])
    return (
        <div className='itemDetailContainer'>
            <ItemDetail product={product} />
        </div>
    )
}

export default ItemDetailContainer

