import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/combine';
import { logging } from './middlewares/logging';


const Store = createStore(rootReducer, 
    compose(
        applyMiddleware(logging),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);
export default Store;