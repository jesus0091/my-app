import React, {useEffect, useState}from 'react'
import Item from '../Item/Item';

const CategoryListContainer = ({match}) => {

    const categoryId = match.params.id
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
                    console.log(response)
                    return response.json();
                })
                .then((data) => {
                    console.log(data)
                    setCategory(data)
                })
        }, 0);
    }, [categoryId])

    return (
        <div className='container'>
            <h2>{capCategoryId}</h2>
            <div className='containerProducts'>
                {
                    category.map((e)=>{
                        return(
                            <div>

                                <Item key={e.id} product={e}/>

                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default CategoryListContainer

