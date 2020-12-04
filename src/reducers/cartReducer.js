const initialState = {
    cart: {
        items: [],
        total: 0
    }
}


export const addItem = (content) => {
    return async dispatch => {
        dispatch({
            type: 'ADD_ITEM',
            data: content
        })
    }
}

export const deleteItem = (item) => {
    return async dispatch => {
        dispatch({
            type: 'DELETE_ITEM',
            data: item 
        })
    }
}

const cartReducer = (state = initialState.cart, action) => {
    switch(action.type){
        case 'ADD_ITEM':
            return {
                ...state,
                items: [...state.items, action.data],
                total: Number(state.total) + Number(action.data.price)
            }
        case 'DELETE_ITEM':
            const item = action.data
            return {
                ...state,
                items: [
                    ...state.items.filter((i) => i.id !== item.id)
                ],
                total: Number(state.total) - Number(item.price)
            }   
        default: 
            return state
    }
}

export default cartReducer