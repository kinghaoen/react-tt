//左手引入UI组件
//import CountUI from '../../components/Count';
//右手引入redux组件 (引入redux核心 store)
// import Store from '../../redux/store';

//引入connect 创建CountContainer容器组件 并暴露
import {connect} from "react-redux";
import {createIncrementAction,createDecrementAction,createIncrementAsyncAction} from "../../redux/count_action";

/*
    第三级优化 将UI组件整合到Container组件中 并删除UI组件原本的文件
 */
import React, {Component} from 'react';

class CountUI extends Component {
    state={cars:'benz'}

    countPlus= ()=>{
        const {value} = this.selectNumber;
        this.props.incrementFun(value*1);
    }

    countMinus= ()=>{
        const {value} = this.selectNumber;
        this.props.decrementFun(value*1);
    }

    countIfOdd= ()=>{
        const {value} = this.selectNumber;
        if(this.props.count %2 !==0){
            this.props.incrementFun(value*1);
        }
    }

    countAsync= ()=>{
        const {value} = this.selectNumber;
        this.props.incrementAsyncFun(value*1,500);
    }

    render() {
        console.log(this.props);
        return (
            <div>
                <h1>当前求和为：{this.props.count}</h1>
                <select ref={c => this.selectNumber =c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;
                <button onClick={this.countPlus}>+</button>&nbsp;
                <button onClick={this.countMinus}>-</button>&nbsp;
                <button onClick={this.countIfOdd}>求和为奇数再加</button>&nbsp;
                <button onClick={this.countAsync}>异步加</button>
            </div>
        );
    }
}
/*
未优化
 */
//向UI组件传递state
// function mapStateToProps(state){
//     return {count:state};
// }

//向UI组件传递dispatch方法
// function mapDispatchToProps(dispatch){
//     return {
//         incrementFun:(value)=>{
//             dispatch(createIncrementAction(value*1));
//         },
//         decrementFun:(value)=>{
//             dispatch(createDecrementAction(value*1));
//         },
//         incrementAsyncFun:(value,time)=>{
//             dispatch(createIncrementAsyncAction(value*1,time));
//
//         }
//     }
// }
/*
第一级优化
 */
/*
const mapStateToProps= (state)=>{
    return {count:state};
}

const mapDispatchToProps= (dispatch)=>{
        return {
        incrementFun:(value)=>{
            dispatch(createIncrementAction(value*1));
        },
        decrementFun:(value)=>{
            dispatch(createDecrementAction(value*1));
        },
        incrementAsyncFun:(value,time)=>{
            dispatch(createIncrementAsyncAction(value*1,time));

        }
    }
}
*/

//(state)=>({count:state}) 这是函数的简写版
export default connect(
    (state)=>({count:state}),
    {
        incrementFun:createIncrementAction,
        decrementFun:createDecrementAction,
        incrementAsyncFun:createIncrementAsyncAction
    }
    )(CountUI);
