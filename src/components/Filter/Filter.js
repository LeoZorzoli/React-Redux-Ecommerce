import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Form, Col, Row } from 'react-bootstrap'
import { setFilter } from '../../reducers/filterReducer'

const Filter = () => {
    const dispatch = useDispatch()

    const radioChange = (event) => {
        dispatch(setFilter(event.target.value))
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
                            type="radio"
                            label="Addidas"
                            value="Addidas"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios1"
                            onChange={radioChange}
                        />
                        <Form.Check
                            type="radio"
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