import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import todoReducer from "./async/todos/todoReducer";
import { composeWithDevTools } from "@redux-devtools/extension";
import langReducer from "./languages/langReducer";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
  todoRed: todoReducer,
  languageRed: langReducer,
});

//middleware example
const loggerMiddleware = (store) => (next) => (action) => {
  console.log("Action:", action);
  console.log("Current State:", store.getState());
  next(action);
  console.log("Updated State:", store.getState());
};

//store, composeWithDevTools, applyMiddleware
//if not using composeWithDevTools, use applyMiddleware(thunk)
//if there are more than one middleware use ","
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, loggerMiddleware))
);

export default store;
