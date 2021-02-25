import {createStore,applyMiddleware,combineReducers} from "redux";
import {countReducer} from "./reducers/count";
import {personReducer} from './reducers/person';
import thunk from "redux-thunk";

const allReducer = combineReducers({
    QiuHe:countReducer,
    Ren:personReducer
})

const store =createStore(allReducer,applyMiddleware(thunk));

export default store;