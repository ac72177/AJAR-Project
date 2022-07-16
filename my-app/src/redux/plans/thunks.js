import { createAsyncThunk } from '@reduxjs/toolkit';
import { actionTypes } from './actionTypes';
import PlanService from './service';

export const addPlanAsync = createAsyncThunk(
    actionTypes.ADD_PLAN,
    async (data) => {
        return await PlanService.addPlan(data);
    }
);

export const checkTaskAsync = createAsyncThunk(
    actionTypes.CHECK_TASK,
    async (data) => {
        return await PlanService.checkTask(data);
    }
)

export const deletePlanAsync = createAsyncThunk(
    actionTypes.DELETE_PLAN,
    async (id) => {
        return await PlanService.deletePlan(id);
    }
);

export const getPlansAsync = createAsyncThunk(
    actionTypes.GET_PLANS,
    async () => {
        return await PlanService.getPlans();
    }
);

export const putPlanAsync = createAsyncThunk(
    actionTypes.PUT_PLAN,
    async (data) => {
        return await PlanService.putPlan(data);
    }
);