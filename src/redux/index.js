import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import cosmoReducer from 
'./reducers/cosmoReducer'

const store = createStore(cosmoReducer, composeWithDevTools());

export default store;
