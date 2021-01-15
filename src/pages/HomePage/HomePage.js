import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../components/Loading/Loading';
import './HomePage.css';
import { getProducts, emptyList } from '../../reducers/productReducer';
import Item from '../../components/Item/Item';
import Filter from '../../components/Filter/Filter';
import { allCategories } from '../../reducers/categoryReducer'

const HomePage = () => {
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getProducts())
        dispatch(allCategories())
    }, [dispatch])

    const listItem = useSelector(state => state.products)

    console.log(listItem)

    const categories = useSelector(state => state.categories)

    if((listItem.length === 0 && categories.length === 0) || !Array.isArray(listItem)) {
        return (
            <Loading />
        )
    } else {
        return (
            <Container fluid>
                <Row>
                    <Col xl={2}>
                        <Filter categories={categories} />
                    </Col>
                    {listItem.length === 0 
                        ?   <Loading /> 
                        :   <Col xl={10}>
                                <Row>
                                    {listItem.map(item => 
                                        <Item key={item.id} item={item} />
                                    )}
                                </Row>
                            </Col>
                    }

                </Row>
            </Container>
        )
    }
}

export default HomePage