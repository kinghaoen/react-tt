import React, {Component} from 'react';
import {nanoid} from 'nanoid';
import propTypes from 'prop-types';
import './header.css';

class Index extends Component {

    static propTypes={
        addTodo:propTypes.func.isRequired
    }

    addTodo = (event)=>{
        const {keyCode,target} = event;
        if(keyCode !== 13) {
            return
        }
        if(target.value.trim() === ''){
            alert("输入框不能为空")
            return
        }

        const todoObj={id:nanoid(),name:target.value,done:false}
        this.props.addTodo(todoObj);

        //清空输入框
        target.value = ''
    }

    render() {
        return (
            <div className="todo-header">
                <input onKeyUp={this.addTodo} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
            </div>
        );
    }
}

export default Index;