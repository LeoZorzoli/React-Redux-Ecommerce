import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import FilterItems from './FilterItems';
import './HomePage.css';
import Filter from '../../components/Filter/Filter';

const HomePage = () => {

    return (
        <Container fluid>
            <Row>
                <Col xl={2}>
                    <Filter />
                </Col>
                <Col xl={10}>
                    <FilterItems />
                </Col>
            </Row>
        </Container>

    )
}

export default HomePage