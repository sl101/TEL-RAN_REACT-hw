import { combineReducers, createStore } from 'redux';
import { productsReducer } from './productsReduser';

const rootReducer = combineReducers({
	products: productsReducer,
});

export const store = createStore(rootReducer);
