import { combineReducers } from 'redux'

import plansSliceReducer from "./plansSlice";

const rootReducer = combineReducers({
    plans: plansSliceReducer
})

export default rootReducer