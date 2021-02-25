import React, {Component} from 'react';
import {connect} from "react-redux";
import {createIncrementAction,createDecrementAction,createIncrementAsyncAction} from "../../redux/actions/count";



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


//(state)=>({count:state}) 这是函数的简写版
export default connect(
    (state)=>({count:state.QiuHe}),
    {
        incrementFun:createIncrementAction,
        decrementFun:createDecrementAction,
        incrementAsyncFun:createIncrementAsyncAction
    }
)(CountUI);
