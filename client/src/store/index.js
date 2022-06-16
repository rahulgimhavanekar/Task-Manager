import { legacy_createStore as createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import todoReducer from "./todoReducer";

const store = createStore(todoReducer, applyMiddleware(logger, thunk));

export default store;
