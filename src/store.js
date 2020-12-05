import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import cartReducer from './reducers/cartReducer'
import brandReducer from './reducers/brandReducer'
import genreReducer from './reducers/genreReducer'

const reducer = combineReducers({
    cart: cartReducer,
    brandFilter: brandReducer,
    genreFilter: genreReducer
})

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)

export default store