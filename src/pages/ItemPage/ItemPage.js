import React from 'react'
import itemList from '../../utils/itemsList'
import { useRouteMatch } from 'react-router-dom'
import { Image, Container, Row, Col, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addItem } from '../../reducers/cartReducer'
import './ItemPage.css'

const ItemPage = () => {

    const dispatch = useDispatch()
    const match = useRouteMatch('/:id')
    const product = match ? itemList.find(i => i.id === Number(match.params.id)) : null

    const addToCart = () => {
        dispatch(addItem(product))
    }

    return (
        <Container className="item-page">
            <Row>
                <Col className="product-image">
                    <Image src={product.src} fluid/>
                </Col>
                <Col className="product-info">
                    <p className="product-title">{product.title}</p>
                    <p className="product-subtitle">{product.subtitle}</p>
                    <p className="product-price"><strong>${product.price}</strong></p>
                    <p className="product-description">{product.description}</p>
                    <Button onClick={addToCart} variant="dark" className="button-item-page">Add to Cart</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default ItemPage