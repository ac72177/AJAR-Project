import { createStore } from '@reduxjs/toolkit'
import rootReducer from './plans/reducer';

const store = createStore(rootReducer)

export default store
