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

export const incrementQuantity = (item) => {
    return async dispatch => {
        dispatch({
            type: 'INCREMENT_QUANTITY',
            data: item
        })
    }
}

export const decrementQuantity = (item) => {
    return async dispatch => {
        dispatch({
            type: 'DECREMENT_QUANTITY',
            data: item
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
            const itemToAdd = {
                item: action.data,
                quantity: 1
            }

            const inState = state.items.filter(item => item.item.title === action.data.title)

            if(inState.length !== 0) {
                return {
                    ...state
                }
            } else {
                return {
                    ...state,
                    items: [...state.items, itemToAdd],
                    total: Number(state.total) + Number(action.data.price)
                }
            }
        case 'DELETE_ITEM':
            const item = state.items.find((i) => i.item === action.data)
            return {
                ...state,
                items: [
                    ...state.items.filter((i) => i.item !== item.item)
                ],
                total: Number(state.total) - Number(item.item.price * item.quantity)
            } 
        case 'INCREMENT_QUANTITY':
            const itemToIncrementQuantity = state.items.find((i) => i.item === action.data)
            const itemIncremented = {
                ...itemToIncrementQuantity,
                quantity: itemToIncrementQuantity.quantity + 1
            }

            return  {
                ...state,
                items: state.items.map((item) => item !== itemToIncrementQuantity ? item : itemIncremented),
                total: Number(state.total) + Number(action.data.price)
            }
        case 'DECREMENT_QUANTITY':
            const itemToDecrementQuantity = state.items.find((i) => i.item === action.data)
            const decrementedItem = {
                ...itemToDecrementQuantity,
                quantity: itemToDecrementQuantity.quantity - 1
            }

            return {
                ...state,
                items: state.items.map((item) => item !== itemToDecrementQuantity ? item : decrementedItem),
                total: Number(state.total) - Number(action.data.price)
            }
        default: 
            return state
    }
}

export default cartReducer