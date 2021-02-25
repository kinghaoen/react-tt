import {ADD_PERSON} from "../constant";
import {nanoid} from "nanoid";

const initState = [{id:nanoid(),name:'tom',age:'18'}]
export const personReducer= (preState=initState,action)=>{
    const{type,data} = action
    switch (type) {
        case ADD_PERSON:
            console.log('ADD_PERSON后的数据',{data,...preState})
            return [data,...preState];
        default:
            return initState;
    }

}