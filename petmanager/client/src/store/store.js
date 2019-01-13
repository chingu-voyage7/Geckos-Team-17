import { createStore, applyMiddleware,compose } from 'redux';
import thunk from 'redux-thunk';

const store = createStore(() => [], {}, applyMiddleware(thunk));

export default store;