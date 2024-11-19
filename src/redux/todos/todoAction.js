//ACTION.JS FOR TODO

export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const TOGGLE_UPDATE = "TOGGLE_UPDATE";
export const UPDATE_TODO = "UPDATE_TODO";

//action creator
export const addTodo = (todo) => ({ type: ADD_TODO, payload: todo });
export const deleteTodo = (id) => ({ type: DELETE_TODO, payload: id });
export const toggleTodo = (id) => ({ type: TOGGLE_TODO, payload: id });
export const toggleUpdate = (id) => ({ type: TOGGLE_UPDATE, payload: id });
//change by id and post text
export const updateTodo = ({ id, text }) => ({
  type: UPDATE_TODO,
  payload: { id, text },
});
