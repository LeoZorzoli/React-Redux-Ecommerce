import productService from '../services/products'

const initialState = []

export const getProducts = () => {
    return async dispatch => {
        const products = await productService.getAll()
        dispatch({
            type: 'GET_PRODUCTS',
            data: products
        })
    }
}

export const productByCategory = (categ) => {
    return async dispatch => {
        const products = await productService.productsByCategory(categ)
        dispatch({
            type: 'PRODUCTS_BY_CATEGORY',
            data: products
        })
    }
}

export const getOneProduct = (id) => {
    return async dispatch => {
        const product = await productService.getOne(id)
        dispatch({
            type: 'GET_ONE_PRODUCT',
            data: product
        })
    }
}

export const emptyList = () => {
    return {
        type: 'EMPTY_LIST',
    }
}

const productsReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'GET_PRODUCTS':
            return action.data
        case 'GET_ONE_PRODUCT':
            return action.data
        case 'PRODUCTS_BY_CATEGORY':
            return action.data
        case 'EMPTY_LIST':
            return initialState
        default:
            return state
    }
}

export default productsReducer