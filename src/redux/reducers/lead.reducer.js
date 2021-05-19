import * as types from "../constants/lead.constants";
const initialState = {
  data: [],
  loading: true,
};

const leadReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.LEAD_GET_REQUEST:
      return { ...state, loading: true };
    case types.LEAD_GET_SUCCESS:
      console.log(payload);
      return { ...state, loading: false, data: payload };
    case types.LEAD_GET_FAILURE:
      console.log("Error in getData ", payload);
      return { ...state, loading: false };

    case types.LEAD_POST_REQUEST:
      return { ...state, loading: true };
    case types.LEAD_POST_SUCCESS:
      console.log(payload);
      return { ...state, loading: false };
    case types.LEAD_POST_FAILURE:
      console.log("Error in postData ", payload);
      return { ...state, loading: false };

    case types.LEAD_UPDATE_REQUEST:
      return { ...state, loading: true };
    case types.LEAD_UPDATE_SUCCESS:
      console.log(payload);
      return { ...state, loading: false };
    case types.LEAD_UPDATE_FAILURE:
      console.log("Error in updateData ", payload);
      return { ...state, loading: false };

    case types.LEAD_DELETE_REQUEST:
      return { ...state, loading: true };
    case types.LEAD_DELETE_SUCCESS:
      console.log(payload);
      return { ...state, loading: false };
    case types.LEAD_DELETE_FAILURE:
      console.log("Error in updateData ", payload);
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default leadReducer;
