import React from 'react'
import { Card } from 'react-bootstrap'
import ItemCount from '../ItemCount/ItemCount'

const Item = ({product}) => {
    return (
        <Card className='cardProduct'>
            <Card.Img  className='' variant="top" src='' />
            <Card.Body className='' >
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.cathegory}</Card.Text>
                <Card.Text>{product.price}</Card.Text>
                <ItemCount
                    initial= '1' />
            </Card.Body>
        </Card>
    )
}
export default Item
