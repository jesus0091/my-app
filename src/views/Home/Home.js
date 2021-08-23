import React from 'react'
import Banner from '../../components/Banner/Banner';
import Category from '../../components/Category/Category'
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer';

const Home = () => {
    return (
        <div className='vp_home'>
            <Banner greeting='Hola!'/>
            <Category />
            <ItemListContainer />
        </div>
    )
}
export default Home
