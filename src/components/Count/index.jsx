import React, {Component} from 'react';

class Count extends Component {
    state={count:0}

    countPlus= ()=>{
        const {value} = this.selectNumber;
        const {count} = this.state;
        this.setState({count:count + parseInt(value)})
    }

    countMinus= ()=>{
        const {value} = this.selectNumber;
        const {count} = this.state;
        this.setState({count:count - parseInt(value)})
    }

    countIfOdd= ()=>{
        const {count} = this.state;
        if(count %2 !==0){
            const {value} = this.selectNumber;

            this.setState({count:count + parseInt(value)})
        }
    }

    countAsync= ()=>{
        setTimeout(()=>{
            const {value} = this.selectNumber;
            const {count} = this.state;
            this.setState({count:count + parseInt(value)})
        },1000)
    }

    render() {

        return (
            <div>
                <h1>当前求和为：{this.state.count}</h1>
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