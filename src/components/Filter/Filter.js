import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form, Col, Row, Button } from 'react-bootstrap'
import { setFilter, removeFilter } from '../../reducers/filterReducer'
import categories from '../../utils/categories'

const Category = (props) => {
    return (
        <Form.Check
            label={props.value}
            value={props.value}
            name="Cateogry"
            onChange={props.handleChange}
        />
    )
}

const Filter = () => {
    const dispatch = useDispatch()

    const radioChange = (event) => {
        if (event.target.checked){
            dispatch(setFilter(event.target.value))
        } else{
            dispatch(removeFilter(event.target.value))
        }
    }

    return (
        <div>
            <Form>
                <Form.Group as={Row}>
                    <Form.Label as="legend" column sm={2}>
                        Radios
                    </Form.Label>
                    <Col sm={10}>
                        {categories.map(category => 
                            <Category value={category} handleChange={radioChange} />
                        )}
                    </Col>
                </Form.Group>
            </Form>
        </div>
    )
}

export default Filter