import reducer from './reducers';
import thunkMiddleware from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';

const logMiddleware = (store) => (next) => (action) => {
    return next(action);
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware, logMiddleware));

export default store;
