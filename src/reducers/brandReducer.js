
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

const filterReducer = (state = [], action) => {
    switch(action.type){
        case "SET_BRAND_FILTER":
            return [...state, action.data.filter]
        case "REMOVE_BRAND_FILTER":
            const filterToDelete = action.data
            return state.filter(f => f !== filterToDelete)
        default:
            return state
    }
}

export default filterReducer