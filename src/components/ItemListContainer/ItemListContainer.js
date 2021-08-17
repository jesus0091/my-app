// import React, {useState, useEffect} from 'react'
import CardComponent from '../Card/Card';

const ItemListContainer = () => {

    return (
        <div className='container containerProducts'>
                    <CardComponent 
                        title='Producto 1'
                        description='Algun texto'
                        stock='5'
                    />
                    <CardComponent 
                        title='Producto 1'
                        description='Algun texto'
                        stock='5'
                    />
                    <CardComponent 
                        title='Producto 1'
                        description='Algun texto'
                        stock='5'
                    />
                    <CardComponent 
                        title='Producto 1'
                        description='Algun texto'
                        stock='5'
                    />
                    <CardComponent 
                        title='Producto 1'
                        description='Algun texto'
                        stock='5'
                    />           
        </div>
    )
}

export default ItemListContainer
