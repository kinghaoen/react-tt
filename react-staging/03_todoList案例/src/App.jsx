import React, {Component} from 'react';
import Header from './components/header';
import List from './components/list';
import Footer from "./components/footer";
import "./app.css"


class App extends Component {

    state={
        todos:[
            {id:'001',name:'吃饭',done:true},
            {id:'002',name:'睡觉',done:false},
            {id:'003',name:'打豆豆',done:true},
            {id:'004',name:'逛街',done:false}

        ]
    }
    //状态state在哪里(App.js里)  修改添加等操作就在哪里

    addTodo= (todoObj)=> {
        //获取之前todos
        const {todos} = this.state;
        const newTodos = [todoObj, ...todos];
        //将新的设置进去
        this.setState({todos:newTodos});
    }

    updateTodo= (id,done)=>{
        //获取todos
        const {todos}= this.state
        //更新todos
        const newTodos =todos.map((todoObj)=>{
            if(todoObj.id === id){
                return {...todoObj,done};
            }else
                return todoObj;
        })
        //将todos更新回状态里
        this.setState({todos: newTodos});
    }

    handleDelete= (id)=> {
        //获取todos
        const {todos} = this.state;
        //删除一个指定的元素
        const newTodos = todos.filter((todoObj)=>{
            //过滤不等于传入id的obj 并返回该obj;
            //符合条件的就被过滤掉了
            return todoObj.id !== id;
        })
        //更新
        this.setState({todos: newTodos});
    }

    //全选 取消全选
    changeAllTodos= (done)=>{
        //获取todos
        const {todos} = this.state;

        const newTodos = todos.map((todoObj)=>{
            //获取到复选框对勾是否勾选
            return {...todoObj,done:done}
        })

        //
        this.setState({todos: newTodos});
    }

    //删除全部已完成任务
    clearAllTodos= ()=>{
        //获取todos
        const {todos} = this.state;

        // const newTodos = todos.map((todoObj)=>{
        //     //获取到复选框对勾是否勾选
        //     return {...todoObj,done:false}
        // })
        const newTodos = todos.filter((todoObj)=>{
            return !todoObj.done
        })

        //将未勾选的todo返回给state
        this.setState({todos: newTodos});
    }

    render() {
        const {todos} =this.state
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header addTodo={this.addTodo} />
                    <List todos={todos} updateTodo={this.updateTodo} delTodo={this.delTodo} handleDelete={this.handleDelete}/>
                    <Footer todos={todos} changeAllTodos={this.changeAllTodos} clearAllTodos={this.clearAllTodos} />
                </div>
            </div>
        );
    }
}

export default App;