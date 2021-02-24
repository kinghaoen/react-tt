//左手引入UI组件
import CountUI from '../../components/Count';
//右手引入redux组件 (引入redux核心 store)
// import Store from '../../redux/store';

//引入connect 创建CountContainer容器组件 并暴露
import {connect} from "react-redux";
import {createIncrementAction,createDecrementAction,createIncrementAsyncAction} from "../../redux/count_action";


//向UI组件传递state
function mapStateToProps(state){
    return {count:state};
}

//向UI组件传递dispatch方法
function mapDispatchToProps(dispatch){
    return {
        incrementFun:(value)=>{
            dispatch(createIncrementAction(value*1));
        },
        decrementFun:(value)=>{
            dispatch(createDecrementAction(value*1));
        },
        incrementIfOddFun:(value)=>{
            dispatch(createIncrementAction(value*1));
        },
        incrementAsyncFun:(value,time)=>{
            dispatch(createIncrementAsyncAction(value*1,time));

        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CountUI);
