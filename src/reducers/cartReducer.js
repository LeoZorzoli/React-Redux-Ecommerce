export const addItem = (content) => {
    return async dispatch => {
        dispatch({
            type: 'ADD_ITEM',
            data: content
        })
    }
}

export const deleteItem = (id) => {
    return async dispatch => {
        dispatch({
            type: 'DELETE_ITEM',
            data: { id }
        })
    }
}

const cartReducer = (state = [], action) => {
    switch(action.type){
        case 'ADD_ITEM':
            return [...state, action.data]
        case 'DELETE_ITEM':
            const { id } = action.data
            return state.filter((item) => item.id !== id)
        default: 
            return state
    }
}

export default cartReducer