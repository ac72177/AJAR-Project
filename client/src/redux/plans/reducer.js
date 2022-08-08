import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { LabelFilters, SortAlphabet } from "../sortFilter/reducer";
import { REQUEST_STATE } from "../utils";
import {
  addPlanAsync,
  getPlansAsync,
  deletePlanAsync,
  putPlanAsync,
} from "./thunks";

const INITIAL_STATE = {
  list: [],
  addPlan: REQUEST_STATE.IDLE,
  deletePlan: REQUEST_STATE.IDLE,
  getPlans: REQUEST_STATE.IDLE,
  putPlan: REQUEST_STATE.IDLE,
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
      });
  },
});

export const selectPlans = (state) => state.plans.list;
// const label = (state) => state.label;
console.log(selectPlans)

export const selectLabel = (state) => state.filters.label;

export const selectFilteredPlans = createSelector(
  selectPlans,
  selectLabel,
  (list, label) => {
    console.log("printing label")
    console.log(label)
    if (label === LabelFilters.All) {
      return list
    }
    let filtered = list.filter((item) => {
      for (let i = 0; i < item.labels.length; i++) {
        if (item.labels[i] === label) return true;
      }
      return false;
    });
    return filtered
  }
)

export default plansSlice.reducer;
