import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './reducer/Products';

export default configureStore({
    reducer: {
        products: productsReducer
    },
});
