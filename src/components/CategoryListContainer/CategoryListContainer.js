import React, { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Item from "../Item/Item";
import { Link } from "react-router-dom";
import { db } from "../../Firebase";
import { collection, query, getDocs, where } from "@firebase/firestore";
import Spinner from "../Spinner/Spinner";

const CategoryListContainer = ({ match }) => {    
    const categoryId = match.params.id;
    function capitalize(str) {
        const lower = str.toLowerCase();
        return str.charAt(0).toUpperCase() + lower.slice(1);
    }
    const capCategoryId = capitalize(categoryId);
    const [category, setCategory] = useState([]);
    const [load, setLoad] = useState(true);
    
  useEffect(() => {
        const getproducts = async () => {
        const dataFirebase = [];
        const q = query(collection(db, "products"), where("category", "==", categoryId));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
        dataFirebase.push({ ...doc.data(), id: doc.id });
        });
        setCategory(dataFirebase);
        setLoad(false);
        };

    setTimeout(() => {
        getproducts();
        }, 2000);
  }, [categoryId]);

  return (
    <>
        <Banner greeting="Hola!" />
        <Category />
        <div className="container mb-5 pb-4">
            <h2 className='titleCategory'>{capCategoryId}</h2>
            <div className="containerProducts">
            {
            load ? <Spinner/> : 
                category.map((e) => {
                return (
                    
                        <Link className="itemLink" to={`/detail/${e.id}`} key={e.id}>
                            <Item product={e}  />
                        </Link>
                    
                );
                })}
            </div>
        </div>
    </>
  );
};

export default CategoryListContainer;
