import React, {Component} from 'react';

class Count extends Component {
    state={cars:'benz'}

    countPlus= ()=>{
        const {value} = this.selectNumber;
        this.props.incrementFun(value);
    }

    countMinus= ()=>{
        const {value} = this.selectNumber;
        this.props.decrementFun(value);
    }

    countIfOdd= ()=>{
        const {value} = this.selectNumber;
        if(this.props.count %2 !==0){
            this.props.incrementFun(value);
        }
    }

    countAsync= ()=>{
        const {value} = this.selectNumber;
        this.props.incrementAsyncFun(value,500);
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

export default Count;