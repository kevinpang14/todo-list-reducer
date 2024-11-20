//ACTION.JS FOR TODO
import axios from "axios";

export const FETCH_TODOS_REQUEST = "FETCH_TODOS_REQUEST";
export const FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS";
export const FETCH_TODOS_FAILURE = "FETCH_TODOS_FAILURE";
export const PROCESS_TODO_SUCCESS = "PROCESS_TODO_SUCCESS";
export const TOGGLE_UPDATE = "TOGGLE_UPDATE";

// action creator
//fetch todos
export const fetchTodos = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_TODOS_REQUEST });
    try {
      const response = await axios.get("http://localhost:3000/todos");
      const data = await response.data;
      //if success then dispatch the data
      dispatch({ type: FETCH_TODOS_SUCCESS, payload: data });
    } catch (error) {
      //if error then dispatch the error
      dispatch({ type: FETCH_TODOS_FAILURE, payload: error.message });
    }
  };
};

export const deleteTodo = (id) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_TODOS_REQUEST });
    try {
      await axios.delete(`http://localhost:3000/todos/${id}`);
      //if delete success then dispatch the success message
      dispatch({ type: PROCESS_TODO_SUCCESS });
    } catch (error) {
      //if error then dispatch the error
      dispatch({ type: FETCH_TODOS_FAILURE, payload: error.message });
    }
  };
};

export const addTodo = (data) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_TODOS_REQUEST });
    try {
      await axios.post(`http://localhost:3000/todos`, data);
      //if delete success then dispatch the success message
      dispatch({ type: PROCESS_TODO_SUCCESS });
    } catch (error) {
      //if error then dispatch the error
      dispatch({ type: FETCH_TODOS_FAILURE, payload: error.message });
    }
  };
};

//get the todo by id
export const fetchTodosById = (id) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_TODOS_REQUEST });
    try {
      const response = await axios.get(`http://localhost:3000/todos/${id}`);
      const data = await response.data;
      return data;
    } catch (error) {
      //if error then dispatch the error
      dispatch({ type: FETCH_TODOS_FAILURE, payload: error.message });
    }
  };
};

export const updateTodo = (id, updatedData) => {
  return async (dispatch, getState) => {
    {
      dispatch({ type: FETCH_TODOS_REQUEST });
      try {
        const todo = getState().todoRed.todos.find((todo) => todo.id === id);
        const updatedTodo = { ...todo, ...updatedData };

        await axios.put(`http://localhost:3000/todos/${id}`, updatedTodo);
        //if update success then dispatch the success message
        dispatch({ type: PROCESS_TODO_SUCCESS });
      } catch (error) {
        //if error then dispatch the error
        dispatch({ type: FETCH_TODOS_FAILURE, payload: error.message });
      }
    }
  };
};

export const toggleTodo = (id, currentCompleted) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_TODOS_REQUEST });
    try {
      const updatedData = { completed: !currentCompleted };
      await axios.patch(`http://localhost:3000/todos/${id}`, updatedData);
      //if update success then dispatch the success message
      dispatch({ type: PROCESS_TODO_SUCCESS });
    } catch (error) {
      //if error then dispatch the error
      dispatch({ type: FETCH_TODOS_FAILURE, payload: error.message });
    }
  };
};

export const toggleUpdate = (id) => ({
  type: "TOGGLE_UPDATE",
  payload: id,
});
