import React from 'react'
import { Card } from 'react-bootstrap'
import ItemCount from '../ItemCount/ItemCount'

const CardComponent = ({ title, description, stock }) => (

    <Card className='cardProduct'>
        <Card.Img  className='' variant="top" src='' />
        <Card.Body className='' >
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Card.Text>{stock}</Card.Text>
            <ItemCount />
        </Card.Body>
    </Card>
)

export default CardComponent