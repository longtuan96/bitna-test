import { toast } from "react-toastify";
import api from "../../api";
import * as types from "../constants/lead.constants";

const getData = () => async (dispatch) => {
  dispatch({ type: types.LEAD_GET_REQUEST, payload: null });
  try {
    const res = await api.get("/leads");
    dispatch({
      type: types.LEAD_GET_SUCCESS,
      payload: res.data.data,
    });
  } catch (error) {
    dispatch({ type: types.LEAD_GET_FAILURE, payload: error.message });
  }
};

const postData = (data) => async (dispatch) => {
  dispatch({ type: types.LEAD_POST_REQUEST, payload: null });
  try {
    const res = await api.post("/leads", data);
    dispatch({
      type: types.LEAD_POST_SUCCESS,
      payload: null,
    });

    toast.success(`Upload success, ${data.first_name}!`);
  } catch (error) {
    dispatch({ type: types.LEAD_POST_FAILURE, payload: error.message });
    toast.error(`Upload failed!`);
  }
};

const updateData = (data, id) => async (dispatch) => {
  dispatch({ type: types.LEAD_UPDATE_REQUEST, payload: null });
  try {
    const res = await api.put(`/mark_lead/${id}`, data);
    dispatch({
      type: types.LEAD_UPDATE_SUCCESS,
      payload: null,
    });

    toast.success(`Update success, ${data.first_name}!`);
  } catch (error) {
    dispatch({ type: types.LEAD_UPDATE_FAILURE, payload: error.message });
    toast.error(`Update failed!`);
  }
};

const deleteData = (id) => async (dispatch) => {
  dispatch({ type: types.LEAD_DELETE_REQUEST, payload: null });
  try {
    const res = await api.delete(`/leads/${id}`);
    dispatch({
      type: types.LEAD_DELETE_SUCCESS,
      payload: null,
    });
  } catch (error) {
    dispatch({ type: types.LEAD_DELETE_FAILURE, payload: error.message });
  }
};
const leadActions = { getData, postData, updateData, deleteData };
export default leadActions;
