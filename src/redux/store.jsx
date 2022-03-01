import { createStore, combineReducers } from "redux";
import listReducer from "./reducers/listReducer"

const appReducer = combineReducers({
    listReducer: listReducer,
});

export default createStore(appReducer);

