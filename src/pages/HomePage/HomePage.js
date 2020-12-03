import React from 'react'
import itemList from '../../utils/itemsList'
import { Container, Row } from 'react-bootstrap'
import Item from '../../components/Item/Item'
import { useSelector } from 'react-redux'

import Filter from '../../components/Filter/Filter'

const HomePage = () => {

    const actualFilter = useSelector(state => state.filter)

    console.log(actualFilter)

    const filteredAnecdotes = () => {
        if(actualFilter){
            const anecdotesToShow = itemList.filter(item => item.brand === actualFilter)
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
            <Filter />
            <Row>
                {filteredAnecdotes()}
            </Row>

        </Container>
    )
}

export default HomePage