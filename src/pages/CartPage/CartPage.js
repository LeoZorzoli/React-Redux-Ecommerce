import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { deleteItem, incrementQuantity, decrementQuantity } from '../../reducers/cartReducer'
import { Container, Row, Col, Image, Button } from 'react-bootstrap'
import './CartPage.css'


const ItemInCart = (item) => {
    const dispatch = useDispatch()
    const i = item.item.item

    const addQuantity = () => {
        dispatch(incrementQuantity(i))
    }

    const deleteQuantity = () => {
        if(item.item.quantity !== 1)
        dispatch(decrementQuantity(i))
    }

    const deleteFromCart = () => {
        dispatch(deleteItem(i))
    }

    return (
        <Col className="itemInCart">
            <Row>
                <Col xl={4}>
                    <Image fluid src={i.image}/>
                </Col>
                <Col xl={8} className="item-cart-info">
                    <p><span className="product-cart-title">{i.title}</span> <strong className="item-cart-price">${i.price}</strong></p>
                    <p>{i.description}</p>
                    <Row>
                        <Col>
                            <Row>
                                <Button variant="dark" onClick={deleteQuantity}>-</Button>
                                    <input className="quantity" value={item.item.quantity} disabled />
                                <Button variant="dark" onClick={addQuantity}>+</Button>
                            </Row>
                        </Col>
                        <Col>
                            <Button variant="outline-danger" onClick={deleteFromCart}><i className="fa fa-trash"></i></Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Col>
    )
}

const CartPage = () => {
    const cart = useSelector(state => state.cart)

    const history = useHistory()

    if(cart.items.length !== 0){
        return(
            <Container>
                <Row>
                    <Col xl={8}>
                        {cart.items.map(item => 
                            <ItemInCart key={item.item.id} item={item} /> 
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
                                    <p>-</p>
                                    <p>Free</p>
                                    <p><strong>${cart.total.toFixed(2)}</strong></p>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    } else {

        const goStart = () => {
            history.push('/')
        }

        return(
            <Container className="cart-empty">
                <p className="title-cart">THE CART IS EMPTY</p>
                <p className="message-cart">Once you add something to your cart, it will appear here. Ready to start?</p>
                <Button onClick={goStart} className="go-start-button">Start <i className="fa fa-long-arrow-right arrow-start"></i></Button>
            </Container>
        )

    }
}

export default CartPage