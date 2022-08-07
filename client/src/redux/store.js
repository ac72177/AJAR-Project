import { configureStore } from "@reduxjs/toolkit";
import plansReducer from "./plans/reducer";
import usersReducer from "./users/reducer";

const store = configureStore({
  reducer: {
    plans: plansReducer,
    users: usersReducer,
  },
  devTools: true,
});

export default store;
