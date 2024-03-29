import { createAsyncThunk } from "@reduxjs/toolkit";
import { actionTypes } from "./actionTypes";
import PlanService from "./service";

export const addPlanAsync = createAsyncThunk(
  actionTypes.ADD_PLAN,
  async (data) => {
    return await PlanService.addPlan(data);
  }
);

export const deletePlanAsync = createAsyncThunk(
  actionTypes.DELETE_PLAN,
  async (data) => {
    return await PlanService.deletePlan(data);
  }
);

export const getPlansAsync = createAsyncThunk(
  actionTypes.GET_PLANS,
  async (userId) => {
    return await PlanService.getPlans(userId);
  }
);

export const putPlanAsync = createAsyncThunk(
  actionTypes.PUT_PLAN,
  async (data) => {
    return await PlanService.putPlan(data);
  }
);

export const getPlanAsync = createAsyncThunk(
  actionTypes.GET_PLAN,
  async (planID) => {
    return await PlanService.getPlan(planID);
  }
);

export const addSubplanAsync = createAsyncThunk(
  actionTypes.ADD_SUBPLAN,
  async (data) => {
    return await PlanService.addSubplan(data);
  }
);

export const deleteSubplanAsync = createAsyncThunk(
  actionTypes.DELETE_SUBPLAN,
  async (data) => {
    return await PlanService.deletePlan(data);
  }
);
