import categorieService from '../services/category'

const initialState = []

export const allCategories = () => {
    return async dispatch => {
        const categories = await categorieService.getCategories()
        dispatch({
            type: 'GET_CATEGORIES',
            data: categories
        })
    }
}

const categoryReducer = (state = initialState, action) => {
    switch(action.type){
        case 'GET_CATEGORIES':
            return [...state, action.data]
        default:
            return state
    }
}

export default categoryReducer