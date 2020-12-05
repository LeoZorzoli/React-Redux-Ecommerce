
const initialState = []

export const setBrandFilter = (filter) => {
    return {
        type: "SET_BRAND_FILTER",
        data: {filter}
    }
}

export const removeBrandFilter = (filter) => {
    return {
        type: "REMOVE_BRAND_FILTER",
        data: filter
    }
}

export const deleteBrandFilter = () => {
    return {
        type: "DELETE_BRAND_FILTER"
    }
}

const filterReducer = (state = initialState, action) => {
    switch(action.type){
        case "SET_BRAND_FILTER":
            return [...state, action.data.filter]
        case "REMOVE_BRAND_FILTER":
            const filterToDelete = action.data
            return state.filter(f => f !== filterToDelete)
        case "DELETE_BRAND_FILTER":
            return initialState
        default:
            return state
    }
}

export default filterReducer