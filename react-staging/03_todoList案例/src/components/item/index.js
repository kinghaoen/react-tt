import React, {Component} from 'react';
import './item.css';

/**
 * 鼠标移入移出效果
 * 移入高亮 出现删除按钮
 * 移出恢复
 */
class Index extends Component {

    state={mouse:false}

    //处理鼠标事件
    handleMouse= (flag)=>{
        return ()=>{
            this.setState({mouse:flag})
        }
    }

    //处理勾选事件
    handleChecked= (id)=>{
        return (event)=>{
            this.props.updateTodo(id,event.target.checked);
        }
    }

    //删除一个todo
    handleDelete = (id)=> {
        //确定删除？？
        if(window.confirm("确定删除吗?")){
            this.props.handleDelete(id);
        }
    }

    render() {
        const {id,name,done} =this.props;
        const {mouse} =this.state;
        return (
            <li style={{backgroundColor:mouse? '#ddd':'white'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
                <label>
                    <input id={id} type="checkbox" checked={done} onChange={this.handleChecked(id)}  />
                    <span>{name}</span>
                </label>
                <button className="btn btn-danger" style={{display:mouse?'block':'none'}} onClick={()=>this.handleDelete(id)}>删除</button>
            </li>
        );
    }
}

export default Index;