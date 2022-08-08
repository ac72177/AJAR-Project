import { configureStore } from "@reduxjs/toolkit";
import plansReducer from "./plans/reducer";
import filtersReducer from "./sortFilter/reducer";

const store = configureStore({
  reducer: {
    plans: plansReducer,
    filters: filtersReducer
  },
  devTools: true,
});

export default store;
