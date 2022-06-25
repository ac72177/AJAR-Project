import { configureStore } from '@reduxjs/toolkit';
import plansReducer from './plans/reducer';

export const store = configureStore({
    reducer: {
        plans: plansReducer
    },
    devTools: true
});
