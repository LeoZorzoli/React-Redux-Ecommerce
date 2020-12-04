import React from 'react'
import { addItem } from '../../reducers/cartReducer'
import { Col, Image, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import './Item.css'

const Item = ({item}) => {
    const dispatch = useDispatch()

    const addToCart = () => {
        dispatch(addItem(item))
    }

    return(
        <Col xl={3} className="item">
            <div>
                <p>Title: {item.title}</p>
                <p>Subtitle: {item.subtitle}</p>
                <p>Price: {item.price}</p>
                <Image src={item.src} fluid/>
            </div>
            <div>
                <Button variant="primary" onClick={addToCart}>Add to cart</Button>
            </div>
        </Col>
    )
}

export default Item