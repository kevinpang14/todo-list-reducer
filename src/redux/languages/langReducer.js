import { TOGGLE_LANG } from "./langAction";

//store the todos in the state
const initialState = {
  lang: "en",
};

//reducer function
const langReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_LANG:
      return {
        ...state,
        lang: action.payload,
      };

    default:
      return state;
  }
};

export default langReducer;
