import React, { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Item from "../Item/Item";
import { Link } from "react-router-dom";

const CategoryListContainer = ({ match }) => {    
  const categoryId = match.params.id;
  function capitalize(str) {
    const lower = str.toLowerCase();
    return str.charAt(0).toUpperCase() + lower.slice(1);
  }
  const capCategoryId = capitalize(categoryId);

  const [category, setCategory] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      fetch(`https://fakestoreapi.com/products/category/${categoryId}`)
        .then((response) => {
          console.log(response);
          return response.json();
        })
        .then((data) => {
          console.log(data);
          setCategory(data);
        });
    }, 0);
  }, [categoryId]);

  return (
    <>
      <Banner greeting="Hola!" />
      <Category />
      <div className="container">
        <h2>{capCategoryId}</h2>
        <div className="containerProducts">
          {category.map((e) => {
            return (
              <div>
                <Link className="itemLink" to={`/detail/${e.id}`}>
                  <Item product={e} key={e.id} />
                </Link>
                {/* <Item key={e.id} product={e}/> */}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CategoryListContainer;
