import React from 'react'
import itemList from '../../utils/itemsList'
import { Container, Row, Col } from 'react-bootstrap'
import Item from '../../components/Item/Item'
import { useSelector } from 'react-redux'

import Filter from '../../components/Filter/Filter'

const HomePage = () => {

    const actualFilter = useSelector(state => state.filter)

    const filteredAnecdotes = () => {
        if(actualFilter.length !== 0){
            const anecdotesToShow = itemList.filter(item => actualFilter.includes(item.brand))
            return(
                <div>
                    {anecdotesToShow.map(item => 
                        <Item key={item.id} item={item} />
                    )}
                </div>
            )
        } else{
            return(
                <div>
                    {itemList.map(item => 
                        <Item key={item.id} item={item} />
                    )}
                </div>
            )
        }
        
    }

    return (
        <Container>
            
            <Row>
                <Col xl={4}>
                    <Filter />
                </Col>
                <Col xl={8}>
                    {filteredAnecdotes()}
                </Col>
            </Row>

        </Container>
    )
}

export default HomePage