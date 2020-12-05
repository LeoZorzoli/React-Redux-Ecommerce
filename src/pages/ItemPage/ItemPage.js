import React from 'react'
import itemList from '../../utils/itemsList'
import { useRouteMatch } from 'react-router-dom'
import { Image, Container, Row, Col, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../../reducers/cartReducer'
import './ItemPage.css'

const ItemPage = () => {

    const dispatch = useDispatch()
    const match = useRouteMatch('/:id')
    const product = match ? itemList.find(i => i.id === Number(match.params.id)) : null

    const cart = useSelector(state => state.cart)
    const cartInclude = cart.items.find(i => i.item === product)

    const addToCart = () => {
        if(!cartInclude){
            dispatch(addItem(product))
        }
    }


    return (
        <Container className="item-page">
            <Row className="row-item-page">
                <Col xl={6} md={12}>
                    <Image src={product.src} fluid/>
                </Col>
                <Col xl={6} md={12} className="product-info">
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