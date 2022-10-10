import tokenReducer from './token';
import productsReducer from './products';
import productsCountReducer from './productsCount';
import { configureStore } from '@reduxjs/toolkit';

export default configureStore({
	reducer: {
		token: tokenReducer,
		products: productsReducer,
		productsCount: productsCountReducer
	}
});
