import productsReducer from './products';
import productsCountReducer from './productsCount';
import { configureStore } from '@reduxjs/toolkit';

export default configureStore({
	reducer: {
		products: productsReducer,
		productsCount: productsCountReducer
	}
});
