import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form, Col, Row, Button } from 'react-bootstrap'
import { setFilter, removeFilter } from '../../reducers/filterReducer'

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
                        <Form.Check
                            label="Addidas"
                            value="Addidas"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios1"
                            onChange={radioChange}
                        />
                        <Form.Check
                            label="Nike"
                            value="Nike"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios2"
                            onChange={radioChange}
                        />
                    </Col>
                </Form.Group>
            </Form>
        </div>
    )
}

export default Filter