import {INCREMENT,DECREMENT} from "./constant";

/**
 * action里: type data
 */
const initCount =0;
export default function countReducer(previousState=initCount,action) {
    const{type,data} = action
    switch (type) {
        case INCREMENT:
            return previousState + data;
        case DECREMENT:
            return previousState - data;
        default:
            return previousState;
    }
}