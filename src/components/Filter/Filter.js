import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form, Col, Row, Button } from 'react-bootstrap'
import { setFilter, removeFilter } from '../../reducers/filterReducer'
import categories from '../../utils/categories'
import './Filter.css'

const Category = (props) => {
    return (

        <div className="form-group filter">
            <div className="form-check">
                <input onChange={props.handleChange} value={props.value} className="form-check-input" type="checkbox" id={props.value} />
                <label className="form-check-label" htmlFor={props.value}>
                    {props.value}
                </label>
            </div>
        </div>
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
                    <Col sm={10}>
                        {categories.map(category => 
                            <Category key={category} value={category} handleChange={radioChange} />
                        )}
                    </Col>
                </Form.Group>
            </Form>
        </div>
    )
}

export default Filter