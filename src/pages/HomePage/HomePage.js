import React from 'react'
import itemList from '../../utils/itemsList'
import { Container, Row } from 'react-bootstrap'
import Item from '../../components/Item/Item'
import { useSelector } from 'react-redux'

const HomePage = () => {

    return (
        <Container>
            <Row>
                {itemList.map(item => 
                    <Item key={item.id} item={item} />
                )}
            </Row>
        </Container>
    )
}

export default HomePage