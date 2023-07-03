import { createReducer } from "@reduxjs/toolkit";

export const subscriptionplanReducer = createReducer(
  { subscriptionplans: [] },
  {
    subscriptionplansRequest: (state) => {
      state.loading = true;
    },
    subscriptionplansSuccess: (state, action) => {
      state.loading = false;
      state.subscriptionplans = action.payload;
    },
    subscriptionplansFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    clearError: (state) => {
      state.error = null;
    },
    clearMessage: (state) => {
      state.message = null;
    },
  }
);
