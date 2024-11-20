import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import todoReducer from "./async/todos/todoReducer";
import { composeWithDevTools } from "@redux-devtools/extension";
import langReducer from "./languages/langReducer";
import { thunk } from "redux-thunk";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { encryptTransform } from "redux-persist-transform-encrypt";

const encryptor = encryptTransform({
  secretKey: import.meta.env.VITE_SECRET_KEY,
  onError: function (error) {
    console.log("Encryption error:", error);
  },
});

const rootReducer = combineReducers({
  todoRed: todoReducer,
  languageRed: langReducer,
});

//configure redux persist, whitelist value same with todoRed
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["todoRed"],
  transforms: [encryptor],
};

//middleware example
const loggerMiddleware = (store) => (next) => (action) => {
  console.log("Action:", action);
  console.log("Current State:", store.getState());
  next(action);
  console.log("Updated State:", store.getState());
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

//store, composeWithDevTools, applyMiddleware
//if not using composeWithDevTools, use applyMiddleware(thunk)
//if there are more than one middleware use ","
const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk, loggerMiddleware))
);

const persistor = persistStore(store);

export { store, persistor };
