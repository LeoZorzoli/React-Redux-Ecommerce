import React from 'react'
import { useDispatch } from 'react-redux'
import { Form, Col, Row } from 'react-bootstrap'
import { productByCategory, emptyList } from '../../reducers/productReducer'
import './Filter.css'


const Category = (props) => {
    return (
        <div className="form-group filter">
            <div className="form-check">
                <input onChange={props.handleChange} value={props.value} name="filter" className="form-check-input" type="radio" id={props.value} />
                <label className="form-check-label" htmlFor={props.value}>
                    {props.value}
                </label>
            </div>
        </div>
    )
}

const Filter = ({categories}) => {

    const dispatch = useDispatch()

    const radioBrandChange = (event) => {
        dispatch(emptyList())
        dispatch(productByCategory(event.target.value))
    }

    if(categories.length === 0) {
        return null
    } else {
        return (
            <div>
                <Form>
                    <Form.Group as={Row}>
                        <Col sm={10}>
                            {categories[0].map(category => 
                                <Category key={category} value={category} handleChange={radioBrandChange} />
                            )} 
                        </Col>
                    </Form.Group>
                </Form>
            </div>
        )
    }
}

export default Filter