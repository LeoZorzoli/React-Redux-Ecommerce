import React, { useEffect } from 'react';
import itemList from '../../utils/itemsList';
import { Row } from 'react-bootstrap';
import Item from '../../components/Item/Item'
import { useSelector, useDispatch } from 'react-redux';
import { deleteBrandFilter } from '../../reducers/brandReducer';
import { deleteGenreFilter } from '../../reducers/genreReducer';

const FilterItems = () => {

    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(deleteBrandFilter())
        dispatch(deleteGenreFilter())
    }, [dispatch])

    const brandFilter = useSelector(state => state.brandFilter)
    const genreFilter = useSelector(state => state.genreFilter)  
    
    const itemsFilterByBrand = itemList.filter(item => brandFilter.includes(item.brand))
    const itemsFilterByGenre = itemList.filter(item => genreFilter.includes(item.genre))

    if(brandFilter.length !== 0){
        if(genreFilter.length !== 0){
            const itemsToShowWithBrandAndGenre = itemsFilterByBrand.filter(item => genreFilter.includes(item.genre))
            return(
                <Row>
                    {itemsToShowWithBrandAndGenre.map(item => 
                        <Item key={item.id} item={item} />
                    )}
                </Row>
            )
        } else {
            return(
                <Row>
                    {itemsFilterByBrand.map(item => 
                        <Item key={item.id} item={item} />
                    )}
                </Row>
            )
        }
    } else if(genreFilter.length !== 0){
        if(brandFilter.length !== 0){
            const itemsToShowWithGenreAndBrand = itemsFilterByGenre.filter(item => brandFilter.includes(item.brand))
            return(
                <Row>
                    {itemsToShowWithGenreAndBrand.map(item => 
                        <Item key={item.id} item={item} />
                    )}
                </Row>
            )
        } else {
            return(
                <Row>
                    {itemsFilterByGenre.map(item => 
                        <Item key={item.id} item={item} />
                    )}
                </Row>
            )
        }

    } else{
        return(
            <Row>
                {itemList.map(item => 
                    <Item key={item.id} item={item} />
                )}
            </Row>
        )
    }
}

export default FilterItems;