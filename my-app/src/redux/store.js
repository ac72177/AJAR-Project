import { configureStore } from "@reduxjs/toolkit";
import plansReducer from "./plans/reducer";

const store = configureStore({
  reducer: {
    plans: plansReducer,
  },
  devTools: true,
});

export default store;
