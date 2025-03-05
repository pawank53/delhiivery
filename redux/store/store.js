import { userReducer } from "../reducer/userReducer";
import {combineReducers, createStore} from "redux";

const rootReducer=combineReducers({
    userState: userReducer
})
export const store=createStore(rootReducer);