import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';
import workersReducer from '../reducers/workers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const storeConfig = () => {
    const store = createStore(
        combineReducers({
            workers: workersReducer,
            auth:authReducer,
        }),
        composeEnhancers(applyMiddleware(thunk))
    );
    return store;
};
export default storeConfig;