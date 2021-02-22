/**
 * action里: type data
 */
const initCount =0;
export default function countReducer(previousState=initCount,action) {
    const{type,data} = action
    console.log('@'+previousState)
    switch (type) {
        case 'increment':
            return previousState + data;
        case 'decrement':
            return previousState - data;
        default:
            return previousState;
    }
}