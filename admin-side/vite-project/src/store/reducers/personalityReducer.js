// store/reducers/personalityReducer.js
import { FIND_PERSONALITY } from "../action/actionType";

const initialState = {
  personality: [],
  isLoading: true,
};

const personalityReducer = (state = initialState, action) => {
  switch (action.type) {
    case FIND_PERSONALITY:
      return {
        ...state,
        personality: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default personalityReducer;
