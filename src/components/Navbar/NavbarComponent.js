import React from 'react'
import { useSelector } from 'react-redux'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import './NavbarComponent.css'

const NavbarComponent = () => {
    const cart = useSelector(state => state.cart)

    return (
        <Navbar className="navbar-component">
            <Container>
                <NavLink to="/" className="nav-link logo">Ecommerce</NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <NavLink to="/cart" className="nav-link cart">
                            <i className="fa fa-shopping-cart"></i> {cart.items.length === 0 ? '' : cart.items.length}
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarComponent