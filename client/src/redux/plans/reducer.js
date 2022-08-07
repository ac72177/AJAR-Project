import { createSlice } from "@reduxjs/toolkit";
import { REQUEST_STATE } from "../utils";
import {
  addPlanAsync,
  getPlansAsync,
  deletePlanAsync,
  putPlanAsync,
  getPlanAsync,
  
  addSubplanAsync,
  deleteSubplanAsync,
} from "./thunks";

const INITIAL_STATE = {
  list: [],
  addPlan: REQUEST_STATE.IDLE,
  deletePlan: REQUEST_STATE.IDLE,
  getPlans: REQUEST_STATE.IDLE,
  putPlan: REQUEST_STATE.IDLE,
  getPlan: REQUEST_STATE.IDLE,

  addSubplan: REQUEST_STATE.IDLE,
  deleteSubplan: REQUEST_STATE.IDLE,
  error: null,
};

const plansSlice = createSlice({
  name: "plans",
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addPlanAsync.pending, (state) => {
        state.addPlan = REQUEST_STATE.PENDING;
        state.error = null;
      })
      .addCase(addPlanAsync.fulfilled, (state, action) => {
        state.addPlan = REQUEST_STATE.FULFILLED;
        state.list.push(action.payload);
      })
      .addCase(addPlanAsync.rejected, (state, action) => {
        state.addPlan = REQUEST_STATE.REJECTED;
        state.error = action.error;
      })
      .addCase(deletePlanAsync.fulfilled, (state, action) => {
        state.deletePlan = REQUEST_STATE.FULFILLED;
        state.list = action.payload;
      })
      .addCase(deletePlanAsync.rejected, (state, action) => {
        state.deletePlan = REQUEST_STATE.REJECTED;
        state.error = action.error;
      })
      .addCase(getPlansAsync.pending, (state) => {
        state.getPlans = REQUEST_STATE.PENDING;
        state.error = null;
      })
      .addCase(getPlansAsync.fulfilled, (state, action) => {
        state.getPlans = REQUEST_STATE.FULFILLED;
        state.list = action.payload;
      })
      .addCase(getPlansAsync.rejected, (state, action) => {
        state.getPlans = REQUEST_STATE.REJECTED;
        state.error = action.error;
      })
      .addCase(putPlanAsync.pending, (state) => {
        state.putPlan = REQUEST_STATE.PENDING;
        state.error = null;
      })
      .addCase(putPlanAsync.fulfilled, (state, action) => {
        state.putPlan = REQUEST_STATE.FULFILLED;
        state.list = action.payload;
      })
      .addCase(putPlanAsync.rejected, (state, action) => {
        state.putPlan = REQUEST_STATE.REJECTED;
        state.error = action.error;
      })
      .addCase(getPlanAsync.pending, (state) => {
        state.getPlan = REQUEST_STATE.PENDING;
        state.error = null;
      })
      .addCase(getPlanAsync.fulfilled, (state, action) => {
        state.getPlan = REQUEST_STATE.FULFILLED;
      })
      .addCase(getPlanAsync.rejected, (state, action) => {
        state.getPlan = REQUEST_STATE.REJECTED;
        state.error = action.error;
      })

      .addCase(addSubplanAsync.pending, (state) => {
        state.addSubplan = REQUEST_STATE.PENDING;
        state.error = null;
      })
      .addCase(addSubplanAsync.fulfilled, (state, action) => {
        state.addSubplan = REQUEST_STATE.FULFILLED;
        state.list = action.payload;
      })
      .addCase(addSubplanAsync.rejected, (state, action) => {
        state.addSubplan = REQUEST_STATE.REJECTED;
        state.error = action.error;
      })
      .addCase(deleteSubplanAsync.fulfilled, (state, action) => {
        state.deleteSubplan = REQUEST_STATE.FULFILLED;
        state.list = action.payload;
      })
      .addCase(deleteSubplanAsync.rejected, (state, action) => {
        state.deleteSubplan = REQUEST_STATE.REJECTED;
        state.error = action.error;
      })
  },
});

export default plansSlice.reducer;
