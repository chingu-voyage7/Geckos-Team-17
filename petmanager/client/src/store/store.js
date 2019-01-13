import { createStore, applyMiddleware,compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import todoReducer from "../reducers/todoReducer";
import initialState from "./initialState";

const rootReducer=combineReducers({
    todo:todoReducer
});

const store = createStore(rootReducer,initialState, applyMiddleware(thunk));

export default store;