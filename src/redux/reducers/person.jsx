import {ADD_PERSON} from "../constant";
import {nanoid} from "nanoid";

const initState = [{id:nanoid(),name:'tom',age:'18'}]
export const personReducer= (preState=initState,action)=>{
    const{type,data} = action
    switch (type) {
        case ADD_PERSON:
            return [data,...preState];
        default:
            return preState;
    }

}