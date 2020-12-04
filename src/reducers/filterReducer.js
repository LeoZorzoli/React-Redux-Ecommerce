
export const setFilter = (filter) => {
    return {
        type: "SET_FILTER",
        data: {filter}
    }
}

export const removeFilter = (filter) => {
    return {
        type: "REMOVE_FILTER",
        data: filter
    }
}

const filterReducer = (state = [], action) => {
    switch(action.type){
        case "SET_FILTER":
            return [...state, action.data.filter]
        case "REMOVE_FILTER":
            const filterToDelete = action.data
            return state.filter(f => f !== filterToDelete)
        default:
            return state
    }
}

export default filterReducer