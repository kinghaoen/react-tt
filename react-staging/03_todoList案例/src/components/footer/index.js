import React, {Component} from 'react';
import './footer.css'

class Index extends Component {

    //处理全选 取消全选
    //根据event所在的input复选框里的checked
    changeAllTodos= (event)=>{
        this.props.changeAllTodos(event.target.checked);
    }

    //清除全部已完成任务
    clearAllTodos= ()=>{
        this.props.clearAllTodos();
    }

    render() {
        const {todos} =this.props;
        //reduce((计数器原始值0，数组循环的每个节点current)=>{返回数值给计数器：当前计数器的值 + 要加的值})
        //最后的0为初始值
        const finishTodos = todos.reduce((accumulator, currentValue)=>{return accumulator + (currentValue.done?1:0)},0);
        const allTodos = todos.length;

        return (
            <div className="todo-footer">
                <label>
                    <input checked={finishTodos === allTodos && allTodos !== 0} onChange={this.changeAllTodos} type="checkbox"/>
                </label>
                <span>
                  <span>已完成{finishTodos}</span> / 全部{allTodos}
                </span>
                <button onClick={this.clearAllTodos} className="btn btn-danger">删除已完成任务</button>
            </div>
        );
    }
}

export default Index;