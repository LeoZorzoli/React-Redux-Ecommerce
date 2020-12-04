import React from 'react'
import itemList from '../../utils/itemsList'
import { Container, Row, Col } from 'react-bootstrap'
import Item from '../../components/Item/Item'
import { useSelector } from 'react-redux'

import './HomePage.css'

import Filter from '../../components/Filter/Filter'

const HomePage = () => {

    const actualFilter = useSelector(state => state.filter)

    const filterItems = () => {
        if(actualFilter.length !== 0){
            const itemsToShoW = itemList.filter(item => actualFilter.includes(item.brand))
            return(
                <Row>
                    {itemsToShoW.map(item => 
                        <Item key={item.id} item={item} />
                    )}
                </Row>
            )
        } else{
            return(
                <Row>
                    {itemList.map(item => 
                        <Item key={item.id} item={item} />
                    )}
                </Row>
            )
        }
        
    }

    return (
        <Container fluid>
            <Row>
                <Col xl={2}>
                    <Filter />
                </Col>
                <Col xl={10}>
                    {filterItems()}
                </Col>
            </Row>
        </Container>

    )
}

export default HomePage