import productsReducer from './products';
import { configureStore } from '@reduxjs/toolkit';

export default configureStore({
	reducer: {
		products: productsReducer
	}
});
