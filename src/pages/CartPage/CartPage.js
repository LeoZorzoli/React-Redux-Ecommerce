import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteItem } from '../../reducers/cartReducer'
import { Container, Row } from 'react-bootstrap'
import './CartPage.css'


const ItemInCart = (item) => {
    const dispatch = useDispatch()
    const i = item.item

    const deleteFromCart = () => {
        dispatch(deleteItem(i.id))
    }

    return (
        <Row className="itemInCart">
            <p>{i.title} {i.price}</p>
            <button onClick={deleteFromCart}>Delete</button>
        </Row>
    )
}

const CartPage = () => {
    const cart = useSelector(state => state.cart)

    return(
        <Container>
            {cart.map(item => 
                <ItemInCart key={item.id} item={item} /> 
            )}
        </Container>
    )
}

export default CartPage