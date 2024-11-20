// import {
//   ADD_TODO,
//   DELETE_TODO,
//   TOGGLE_TODO,
//   TOGGLE_UPDATE,
//   UPDATE_TODO,
// } from "./todoAction";
import {
  FETCH_TODOS_REQUEST,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_FAILURE,
  PROCESS_TODO_SUCCESS,
} from "./todoAction";

//store the todos in the state
const initialState = {
  todos: [],
  loading: false,
  error: null,
  isSuccess: false,
  updateTrackId: null,
};

//reducer function
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TODOS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        isSuccess: false,
      };
    case FETCH_TODOS_SUCCESS:
      return {
        ...state,
        loading: false,
        todos: action.payload,
      };
    case FETCH_TODOS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case PROCESS_TODO_SUCCESS:
      return {
        ...state,
        isSuccess: true,
      };
    //default must be defined, if not it will throw an error
    default:
      return state;
  }
};

export default todoReducer;
