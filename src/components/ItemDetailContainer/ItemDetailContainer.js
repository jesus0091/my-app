import React, { useState, useEffect} from 'react';
import Spinner from '../Spinner/Spinner';
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = ({ match }) => {
    let productId = match.params.id;
    const [product, setProduct] = useState({});
    const [load, setLoad] = useState(true);

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
                    setLoad(false);
                })
        }, 1500);
    }, [productId])
    return (
        <div className='itemDetailContainer'>
            {
                load ? <Spinner /> : <ItemDetail product={product} />
            }
            
        </div>
    )
}

export default ItemDetailContainer