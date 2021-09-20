import React, { useState, useEffect } from "react";
import Spinner from "../Spinner/Spinner";
import ItemDetail from "../ItemDetail/ItemDetail";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../Firebase";

const ItemDetailContainer = ({ match }) => {
    const [product, setProduct] = useState({});
    let productId = match.params.id;
    const [load, setLoad] = useState(true);

    useEffect(() => {
        const getDetail = async () => {
        const docRef = doc(db, "products", productId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            setProduct({ ...docSnap.data(), id: docSnap.id });
            setLoad(false);
        } else {
            console.log("No such document!");
        }
        };
        
        getDetail();
    }, [productId]);

    return (
        <div className="itemDetailContainer">
            {load ? <Spinner /> : <ItemDetail product={product} />}
        </div>
    );
};

export default ItemDetailContainer;
