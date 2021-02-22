import React, {Component} from 'react';
import store from "../../redux/store";
import {createIncrementAction,createDecrementAction} from "../../redux/count_action";

class Count extends Component {
    state={cars:'benz'}

    // componentDidMount() {
    //     store.subscribe(()=>{
    //         this.setState({})
    //     })
    // }

    countPlus= ()=>{
        const {value} = this.selectNumber;
        store.dispatch(createIncrementAction(value*1));
    }

    countMinus= ()=>{
        const {value} = this.selectNumber;
        store.dispatch(createDecrementAction(value*1));
    }

    countIfOdd= ()=>{
        const count = store.getState();
        if(count %2 !==0){
            const {value} = this.selectNumber;

            store.dispatch(createIncrementAction(value*1));
        }
    }

    countAsync= ()=>{
        setTimeout(()=>{
            const {value} = this.selectNumber;
            store.dispatch(createIncrementAction(value*1));
        },1000)
    }

    render() {

        return (
            <div>
                <h1>当前求和为：{store.getState()}</h1>
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

export default Count;