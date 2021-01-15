import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import cartReducer from './reducers/cartReducer'
import productsReducer from './reducers/productReducer'
import categoryReducer from './reducers/categoryReducer'

const reducer = combineReducers({
    cart: cartReducer,
    products: productsReducer,
    categories: categoryReducer
})

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)

export default store