import { createReducer } from "@reduxjs/toolkit";

export const adminReducer = createReducer(
  {},
  {
    getAdminStatsRequest: (state) => {
      state.loading = true;
    },
    getAdminStatsSuccess: (state, action) => {
      state.loading = false;
      state.stats = action.payload.stats;
      state.viewsCount = action.payload.viewsCount;
      state.subscriptionCount = action.payload.subscriptionCount;
      state.usersCount = action.payload.usersCount;
      state.subscriptionPercentage = action.payload.subscriptionPercentage;
      state.viewsPercentage = action.payload.viewsPercentage;
      state.usersPercentage = action.payload.usersPercentage;
      state.subscriptionProfit = action.payload.subscriptionProfit;
      state.viewsProfit = action.payload.viewsProfit;
      state.usersProfit = action.payload.usersProfit;
    },
    getAdminStatsFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    getAdminCoursesRequest: (state) => {
      state.loading = true;
    },

    getAdminCoursesSuccess: (state, action) => {
      state.loading = false;
      state.courses = action.payload;
    },

    getAdminCoursesFail: (state, action) => {
      state.loading = false;
      state.courses = action.payload;
    },

    

    getAllUsersRequest: (state) => {
      state.loading = true;
    },
    getAllUsersSuccess: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
    getAllUsersFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    getAllPaymentsRequest: (state) => {
      state.loading = true;
    },
    getAllPaymentsSuccess: (state, action) => {
      state.loading = false;
      state.payments = action.payload;
    },
    getAllPaymentsFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    getAllSubscriptionPaymentsRequest: (state) => {
      state.loading = true;
    },
    getAllSubscriptionPaymentsSuccess: (state, action) => {
      state.loading = false;
      state.subpayments = action.payload;
    },
    getAllSubscriptionPaymentsFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    getAdminTeachersRequest: (state) => {
      state.loading = true;
    },

    getAdminTeachersSuccess: (state, action) => {
      state.loading = false;
      state.teachers = action.payload;
    },

    getAdminTeachersFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    getAdminPlansRequest: (state) => {
      state.loading = true;
    },

    getAdminPlansSuccess: (state, action) => {
      state.loading = false;
      state.plans = action.payload;
    },

    getAdminPlansFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },




    updateUserRoleRequest: (state) => {
      state.loading = true;
    },
    updateUserRoleSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    updateUserRoleFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    deleteUserRequest: (state) => {
      state.loading = true;
    },
    deleteUserSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    deleteUserFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    createCourseRequest: (state) => {
      state.loading = true;
    },
    createCourseSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    createCourseFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },


    createTeacherRequest: (state) => {
      state.loading = true;
    },
    createTeacherSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    createTeacherFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },


    createPlanRequest: (state) => {
      state.loading = true;
    },
    createPlanSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    createPlanFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },



    deleteCourseRequest: (state) => {
      state.loading = true;
    },
    deleteCourseSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    deleteCourseFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    deleteTeacherRequest: (state) => {
      state.loading = true;
    },
    deleteTeacherSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    deleteTeacherFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    deletePlanRequest: (state) => {
      state.loading = true;
    },
    deletePlanSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    deletePlanFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    addLectureRequest: (state) => {
      state.loading = true;
    },
    addLectureSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    addLectureFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    deleteLectureRequest: (state) => {
      state.loading = true;
    },
    deleteLectureSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    deleteLectureFail: (state, action) => {
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
