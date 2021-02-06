import React, {Component} from 'react';
import Item from '../item';
import propTypes from 'prop-types';
import './list.css';

class Index extends Component {
    static propTypes={
        todos:propTypes.array.isRequired,
        updateTodo:propTypes.func.isRequired,
        handleDelete:propTypes.func.isRequired
    }

    render() {
        const {todos,updateTodo,handleDelete} = this.props

        return (
            <ul className="todo-main">
                {
                    todos.map((todo)=>{
                        /*return <Item key={todo.id} id={todo.id} name={todo.name} done={todo.done} />*/
                        return <Item key={todo.id} {...todo} updateTodo={updateTodo} handleDelete={handleDelete} />
                    })
                }
            </ul>
        );
    }
}

export default Index;