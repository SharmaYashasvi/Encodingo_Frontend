 import { server } from '../store';
import axios from "axios";

export const createCourse = (formData) => async (dispatch) => {
  try {
    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };
    dispatch({ type: "createCourseRequest" });

    const { data } = await axios.post(`${server}/createcourse`, formData, config);

    dispatch({ type: "createCourseSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "createCourseFail",
      payload: error.response.data.message,
    });
  }
};

export const createTeacher = (formData) => async (dispatch) => {
  try {
    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };
    dispatch({ type: "createTeacherRequest" });

    const { data } = await axios.post(`${server}/createteacher`,formData,config);

    dispatch({ type: "createTeacherSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "createTeacherFail",
      payload: error.response.data.message,
    });
  }
};

export const createPlan = (duration , sessions , originalprice , discountprice) => async (dispatch) => {
  try {
    // const config = {
    //   headers: { "Content-Type": "application/json" },
    //   withCredentials: true,
    // };
    dispatch({ type: "createPlanRequest" });

    const { data } = await axios.post(`${server}/createplan`, { duration , sessions , originalprice , discountprice},
    {
      headers: {
        'Content-type': 'application/json',
      },

      withCredentials: true,
    });

    dispatch({ type: "createPlanSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "createPlanFail",
      payload: error.response.data.message,
    });
  }
};

export const deleteCourse = (id) => async (dispatch) => {
  try {
    const config = {
      withCredentials: true,
    };
    dispatch({ type: "deleteCourseRequest" });

    const { data } = await axios.delete(`${server}/course/${id}`, config);

    dispatch({ type: "deleteCourseSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "deleteCourseFail",
      payload: error.response.data.message,
    });
  }
};

export const deleteTeacher = (id) => async (dispatch) => {
  try {
    const config = {
      withCredentials: true,
    };
    dispatch({ type: "deleteTeacherRequest" });

    const { data } = await axios.delete(`${server}/teacher/${id}`, config);

    dispatch({ type: "deleteTeacherSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "deleteTeacherFail",
      payload: error.response.data.message,
    });
  }
};

export const deletePlan = (id) => async (dispatch) => {
  try {
    const config = {
      withCredentials: true,
    };
    dispatch({ type: "deletePlanRequest" });

    const { data } = await axios.delete(`${server}/plan/${id}`, config);

    dispatch({ type: "deletePlanSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "deletePlanFail",
      payload: error.response.data.message,
    });
  }
};

export const addLecture = (id, formdata) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-type": "multipart/form-data",
      },
      withCredentials: true,
    };
    dispatch({ type: "addLectureRequest" });

    const { data } = await axios.post(
      `${server}/course/${id}`,
      formdata,
      config
    );

    dispatch({ type: "addLectureSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "addLectureFail",
      payload: error.response.data.message,
    });
  }
};

export const deleteLecture = (courseId, lectureId) => async (dispatch) => {
  try {
    const config = {
      withCredentials: true,
    };
    dispatch({ type: "deleteLectureRequest" });

    const { data } = await axios.delete(
      `${server}/lecture?courseId=${courseId}&lectureId=${lectureId}`,
      config
    );

    dispatch({ type: "deleteLectureSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "deleteLectureFail",
      payload: error.response.data.message,
    });
  }
};

export const getAllUsers = () => async (dispatch) => {
  try {
    const config = {
      withCredentials: true,
    };
    dispatch({ type: "getAllUsersRequest" });

    const { data } = await axios.get(`${server}/admin/users`, config);

    dispatch({ type: "getAllUsersSuccess", payload: data.users });
  } catch (error) {
    dispatch({
      type: "getAllUsersFail",
      payload: error.response.data.message,
    });
  }
};


export const getAllPayments = () => async (dispatch) => {
  try {
    const config = {
      withCredentials: true,
    };
    dispatch({ type: "getAllPaymentsRequest" });

    const { data } = await axios.get(`${server}/admin/payments`, config);

    dispatch({ type: "getAllPaymentsSuccess", payload: data.payments });
  } catch (error) {
    dispatch({
      type: "getAllPaymentsFail",
      payload: error.response.data.message,
    });
  }
};

export const getAllSubscriptionPayments = () => async (dispatch) => {
  try {
    const config = {
      withCredentials: true,
    };
    dispatch({ type: "getAllSubscriptionPaymentsRequest" });

    const { data } = await axios.get(`${server}/admin/subscriptionpayments`, config);

    dispatch({ type: "getAllSubscriptionPaymentsSuccess", payload: data.subpayments });
  } catch (error) {
    dispatch({
      type: "getAllSubscriptionPaymentsFail",
      payload: error.response.data.message,
    });
  }
};

export const getAllCoursesAdmin = () => async (dispatch) => {
  try {
    const config = {
      withCredentials: true,
    };
    dispatch({ type: "getAdminCoursesRequest" });

    const { data } = await axios.get(`${server}/admin/courses`, config);

    dispatch({ type: "getAdminCoursesSuccess", payload: data.courses });
  } catch (error) {
    dispatch({
      type: "getAdminCoursesFail",
      payload: error.response.data.message,
    });
  }
};

export const getAllTeachersAdmin = () => async (dispatch) => {
  try {
    const config = {
      withCredentials: true,
    };
    dispatch({ type: "getAdminTeachersRequest" });

    const { data } = await axios.get(`${server}/admin/teachers`, config);

    dispatch({ type: "getAdminTeachersSuccess", payload: data.teachers });
  } catch (error) {
    dispatch({
      type: "getAdminTeachersFail",
      payload: error.response.data.message,
    });
  }
};

export const getAllPlansAdmin = () => async (dispatch) => {
  try {
    const config = {
      withCredentials: true,
    };
    dispatch({ type: "getAdminPlansRequest" });

    const { data } = await axios.get(`${server}/admin/subscribeplans`, config);

    dispatch({ type: "getAdminPlansSuccess", payload: data.subscribeplans });
  } catch (error) {
    dispatch({
      type: "getAdminPlansFail",
      payload: error.response.data.message,
    });
  }
};

export const updateUserRole = (id) => async (dispatch) => {
  try {
    const config = {
      withCredentials: true,
    };
    dispatch({ type: "updateUserRoleRequest" });

    const { data } = await axios.put(`${server}/admin/user/${id}`, {}, config);

    dispatch({ type: "updateUserRoleSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "updateUserRoleFail",
      payload: error.response.data.message,
    });
  }
};

export const deleteUser = (id) => async (dispatch) => {
  try {
    const config = {
      withCredentials: true,
    };
    dispatch({ type: "deleteUserRequest" });

    const { data } = await axios.delete(`${server}/admin/user/${id}`, config);

    dispatch({ type: "deleteUserSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "deleteUserFail",
      payload: error.response.data.message,
    });
  }
};

export const getDashboardStats = () => async (dispatch) => {
  try {
    const config = {
      withCredentials: true,
    };
    dispatch({ type: "getAdminStatsRequest" });

    const { data } = await axios.get(`${server}/admin/stats`, config);

    dispatch({ type: "getAdminStatsSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "getAdminStatsFail",
      payload: error.response.data.message,
    });
  }
};
