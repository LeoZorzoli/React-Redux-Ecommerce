const initialState = []

export const setGenreFilter = (filter) => {
    return {
        type: "SET_GENRE_FILTER",
        data: {filter}
    }
}

export const removeGenreFilter = (filter) => {
    return {
        type: "REMOVE_GENRE_FILTER",
        data: filter
    }
}

export const deleteGenreFilter = () => {
    return {
        type: "DELETE_GENRE_FILTER"
    }
}

const genreReducer = (state = initialState, action) => {
    switch(action.type){
        case 'SET_GENRE_FILTER':
            return [...state, action.data.filter]
        case "REMOVE_GENRE_FILTER":
            const filterToDelete = action.data
            return state.filter(f => f !== filterToDelete)
        case "DELETE_GENRE_FILTER":
            return initialState
        default:
            return state
    }
}

export default genreReducer