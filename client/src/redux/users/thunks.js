import { createAsyncThunk } from "@reduxjs/toolkit";
import { actionTypes } from "./actionTypes";
import UserService from "../users/service";

export const addUserAsync = createAsyncThunk(
  actionTypes.ADD_USER,
  async (data) => {
    return await UserService.addUser(data);
  }
);
