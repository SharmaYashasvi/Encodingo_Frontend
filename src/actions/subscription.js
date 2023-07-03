import { server } from "../store";
import axios from "axios";

export const getAllPlans = () => async (dispatch) => {
  try {
    dispatch({ type: "subscriptionplansRequest" });

    const { data } = await axios.get(`${server}/subscribeplans`);

    dispatch({
      type: "subscriptionplansSuccess",
      payload: data.subscribeplans,
    });
  } catch (error) {
    dispatch({
      type: "subscriptionplansFail",
      payload: error.response.data.message,
    });
  }
};
