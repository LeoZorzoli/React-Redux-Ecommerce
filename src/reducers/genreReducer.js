
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

const genreReducer = (state = [], action) => {
    switch(action.type){
        case 'SET_GENRE_FILTER':
            return [...state, action.data.filter]
        case "REMOVE_GENRE_FILTER":
            const filterToDelete = action.data
            return state.filter(f => f !== filterToDelete)
        default:
            return state
    }
}

export default genreReducer