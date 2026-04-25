import { configureStore } from '@reduxjs/toolkit';
import portfolioReducer from './portfolioSlice';
import themeReducer from './themeSlice';

const store = configureStore({
        reducer: { portfolio: portfolioReducer, theme: themeReducer },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;