import React from 'react'
import { addItem } from '../../reducers/cartReducer'
import { Col, Row, Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import './Item.css'

const Item = ({item}) => {
    const dispatch = useDispatch()

    const addToCart = () => {
        dispatch(addItem(item))
    }

    return(
        <Col xl={3} className="item">
            <Card>
                <Card.Header className="item-title">
                    <Row>
                        <Col xl={8}>{item.title}</Col>
                        <Col xl={4}>${item.price}</Col>
                    </Row>
                </Card.Header>
                <Card.Img variant="top" src={item.src} />
                <Card.Footer className="card-footer">
                    <Button className="button-footer" variant="outline-dark"><Link className="link-more" to={`/${item.id}`}>See more</Link></Button>
                    <Button className="button-footer" onClick={addToCart} variant="outline-dark">Add to Cart</Button>
                </Card.Footer>
            </Card>
        </Col>
    )
}

export default Item