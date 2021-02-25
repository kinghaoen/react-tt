import {countReducer} from "./count";
import {personReducer} from './person';
import {combineReducers} from "redux";

export const indexReducer = combineReducers({
    QiuHe:countReducer,
    Ren:personReducer
})