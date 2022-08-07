import { createSlice } from "@reduxjs/toolkit";
import { REQUEST_STATE } from "../utils";
import { addUserAsync, getUserAsync } from "./thunks";

const INITIAL_STATE = {
  list: [],
  addUser: REQUEST_STATE.IDLE,
  getUser: REQUEST_STATE.IDLE,
  error: null,
};

export const usersSlice = createSlice({
  name: "users",
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addUserAsync.pending, (state) => {
        state.addPlan = REQUEST_STATE.PENDING;
        state.error = null;
      })
      .addCase(addUserAsync.fulfilled, (state, action) => {
        state.addPlan = REQUEST_STATE.FULFILLED;
        state.list.push(action.payload);
      })
      .addCase(addUserAsync.rejected, (state, action) => {
        state.addPlan = REQUEST_STATE.REJECTED;
        state.error = action.error;
      })
      .addCase(getUserAsync.pending, (state) => {
        state.getPlans = REQUEST_STATE.PENDING;
        state.error = null;
      })
      .addCase(getUserAsync.fulfilled, (state, action) => {
        state.getPlans = REQUEST_STATE.FULFILLED;
        state.list = action.payload;
      })
      .addCase(getUserAsync.rejected, (state, action) => {
        state.getPlans = REQUEST_STATE.REJECTED;
        state.error = action.error;
      });
  },
});

export default usersSlice.reducer;
