import React, { useEffect } from 'react'
import { useRouteMatch } from 'react-router-dom'
import { Image, Container, Row, Col, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../../reducers/cartReducer'
import Loading from  '../../components/Loading/Loading'
import './ItemPage.css'

import { getOneProduct } from '../../reducers/productReducer'

const ItemPage = () => {

    const dispatch = useDispatch()

    const match = useRouteMatch('/:id')

    useEffect(() => {
        dispatch(getOneProduct(match.params.id))
    }, [dispatch, match.params.id])

    const product = useSelector(state => state.products)
    
    const addToCart = () => {
        dispatch(addItem(product))
    }

    if(product.length === 0 || product.length > 1) {
        return (
            <Loading />
        )
    } else {
        return (
            <Container className="item-page">
                <Row className="row-item-page">
                    <Col xl={6} md={12}>
                        <Image src={product.image} fluid/>
                    </Col>
                    <Col xl={6} md={12} className="product-info">
                        <p className="product-title">{product.title}</p>
                        <p className="product-subtitle">{product.category}</p>
                        <p className="product-price"><strong>${product.price}</strong></p>
                        <p className="product-description">{product.description}</p>
                        <Button onClick={addToCart} variant="dark" className="button-item-page">Add to Cart</Button>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default ItemPage