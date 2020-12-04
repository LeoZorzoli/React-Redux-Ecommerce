import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteItem } from '../../reducers/cartReducer'
import { Container, Row, Col, Image, Button, Form } from 'react-bootstrap'
import './CartPage.css'


const ItemInCart = (item) => {
    const dispatch = useDispatch()
    const i = item.item

    const deleteFromCart = () => {
        dispatch(deleteItem(i))
    }

    return (
        <Col className="itemInCart">
            <Row>
                <Col xl={4}>
                    <Image fluid src={i.src}/>
                </Col>
                <Col xl={8} className="item-cart-info">
                    <p><span className="product-cart-title">{i.title}</span> <strong className="item-cart-price">${i.price}</strong></p>
                    <p>{i.description}</p>
                    <Row>
                        <Col>
                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Control className="form-total-control" as="select" defaultValue="1">
                                    <option disabled>Choose...</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Button variant="dark" onClick={deleteFromCart}>Delete</Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Col>
    )
}

const CartPage = () => {
    const cart = useSelector(state => state.cart)

    return(
        <Container>
            <Row>
                <Col xl={8}>
                    {cart.items.map(item => 
                        <ItemInCart key={item.id} item={item} /> 
                    )}
                </Col>
                <Col xl={3}>
                    <div className="data-container">
                        <p className="resume"><strong>Resume</strong></p>
                        <Row>
                            <Col>
                                <p>{cart.items.length} Products</p>
                                <p>Delivery</p>
                                <p><strong>Total</strong></p>
                            </Col>
                            <Col>
                                <p>${cart.total}</p>
                                <p>Free</p>
                                <p><strong>${cart.total}</strong></p>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default CartPage