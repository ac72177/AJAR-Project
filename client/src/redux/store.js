import { configureStore } from "@reduxjs/toolkit";
import plansReducer from "./plans/reducer";
import filtersReducer from "./filter/reducer";
import usersReducer from "./users/reducer";


const store = configureStore({
  reducer: {
    plans: plansReducer,
    filters: filtersReducer,
    users: usersReducer,
  },
  devTools: true,
});

export default store;
