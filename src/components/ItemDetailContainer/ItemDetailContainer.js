import React, { useState, useEffect} from 'react';
import Spinner from '../Spinner/Spinner';
import ItemDetail from '../ItemDetail/ItemDetail'
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../Firebase';

const ItemDetailContainer = ({ match }) => {
    const [product, setProduct] = useState({});
    let productId = match.params.id;
    const [load, setLoad] = useState(false);

//     console.log(product)
//     useEffect(() => {
//         setTimeout(() => {
//             fetch(`https://fakestoreapi.com/products/${productId}`)
//                 .then((response) => {
//                     console.log(response)
//                     return response.json();
//                 })
//                 .then((data) => {
//                     console.log(data)
//                     setProduct(data)
//                     setLoad(false);
//                 })
//         }, 1500);
//     }, [productId])

const getDetails = async () => {
    const dataFirebase = [];
    const docRef = doc( db, "products", productId );
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      dataFirebase.push({ ...docSnap.data(), Id: productId });
      setProduct(dataFirebase);
      setLoad(false);
    } else {
      // doc.data() will be undefined in this case
      console.log("No funciona :(");
    }
  };

  useEffect(() => {
    getDetails();
  }, []);


    return (
        <div className='itemDetailContainer'>
            {
                load ? <Spinner /> : <ItemDetail product={product} />
            }
            
        </div>
    )
}

export default ItemDetailContainer