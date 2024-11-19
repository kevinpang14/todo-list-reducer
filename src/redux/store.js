import { legacy_createStore as createStore, combineReducers } from "redux";
import todoReducer from "./todos/todoReducer";
import { composeWithDevTools } from "@redux-devtools/extension";
import langReducer from "./languages/langReducer";

const rootReducer = combineReducers({
  todoRed: todoReducer,
  languageRed: langReducer,
});

//store
const store = createStore(rootReducer, composeWithDevTools());

export default store;
