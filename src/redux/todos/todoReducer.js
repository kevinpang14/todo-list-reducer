import {
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
  TOGGLE_UPDATE,
  UPDATE_TODO,
} from "./todoAction";

//store the todos in the state
const initialState = {
  todos: [
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a To-Do List", completed: false },
    { id: 3, text: "Celebrate", completed: false },
  ],
  updateTrackId: null,
};

// const handleFindId = (data, todos) => {
//   const id = data.id;
//   const index = todos.findIndex((todo) => todo.id === id);

//   if (index >= 0) {
//     const finalData = (todos[index].text = data.text);
//     return { ...todos, finalData };
//   } else {
//     return;
//   }
// };

//reducer function
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };

    case TOGGLE_UPDATE:
      return {
        ...state,
        // set the update track id
        updateTrackId: action.payload,
      };

    case UPDATE_TODO:
      return {
        //condition get id from todos, and update the text only using spread synyax
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, text: action.payload.text }
            : todo
        ),
        //reset update track id to null
        updateTrackId: null,
      };

    default:
      return state;
  }
};

export default todoReducer;
