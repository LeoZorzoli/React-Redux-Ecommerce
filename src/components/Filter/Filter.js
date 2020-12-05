import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form, Col, Row, Button } from 'react-bootstrap'
import { setBrandFilter, removeBrandFilter } from '../../reducers/brandReducer'
import { setGenreFilter, removeGenreFilter } from '../../reducers/genreReducer'
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

    const radioBrandChange = (event) => {
        if (event.target.checked){
            dispatch(setBrandFilter(event.target.value))
        } else{
            dispatch(removeBrandFilter(event.target.value))
        }
    }

    const radioGenreChange = (event) => {
        if (event.target.checked){
            dispatch(setGenreFilter(event.target.value))
        } else{
            dispatch(removeGenreFilter(event.target.value))
        }
    }

    return (
        <div>
            <Form>
                <Form.Group as={Row}>
                    <Col sm={10}>
                        {categories.map(category => 
                            <Category key={category} value={category} handleChange={radioBrandChange} />
                        )}
                    </Col>
                </Form.Group>

                <Form.Group as={Row}>
                    <Col sm={10}>
                        <Category key="Man" value="Man" handleChange={radioGenreChange} />
                        <Category key="Woman" value="Woman" handleChange={radioGenreChange} />
                    </Col>
                </Form.Group>
            </Form>
        </div>
    )
}

export default Filter