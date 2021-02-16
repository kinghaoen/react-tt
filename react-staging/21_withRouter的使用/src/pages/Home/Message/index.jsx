import React, {Component} from 'react';
import {Link,Route} from "react-router-dom";
import Detail from "./Detail";

class Message extends Component {
    state={
        messageArr:[
            {id:'01',title:'消息1'},
            {id:'02',title:'消息2'},
            {id:'03',title:'消息3'}
        ]
    }

    //编程式导航
    replaceShow(id,title){
        //replace跳转   携带param参数
        // this.props.history.replace(`/home/message/detail/${id}/${title}`);

        //replace跳转   携带search参数
        // this.props.history.replace(`/home/message/detail/?id=${id}&title=${title}`);

        //replace跳转   携带search参数
        this.props.history.replace(`/home/message/detail/`, {id,title});
    }
    pushShow(id,title){
        //replace跳转   携带param参数
        // this.props.history.push(`/home/message/detail/${id}/${title}`);

        //replace跳转   携带search参数
        // this.props.history.push(`/home/message/detail/?id=${id}&title=${title}`);

        //replace跳转   携带state参数
        this.props.history.push(`/home/message/detail/`, {id,title});
    }

    back= ()=>{
        this.props.history.goBack();
    }
    forward= ()=>{
        this.props.history.goForward();
    }
    go= ()=>{
        //正整数前进,例如2 前进2步
        //负整数后退，例如-2 后退2步
        this.props.history.go(2);
    }

    render() {
        const {messageArr} = this.state
        return (
            <div>
                <ul>
                    {
                        messageArr.map((messageObj) =>{
                            return(
                                <li key={messageObj.id}>
                                    {/*向路由组件传递param参数*/}
                                    {/*<Link to={`/home/message/detail/${messageObj.id}/${messageObj.title}`}>{messageObj.title}</Link>*/}


                                    {/*向路由组件传递search参数*/}
                                    {/*<Link to={`/home/message/detail/?id=${messageObj.id}&title=${messageObj.title}`}>{messageObj.title}</Link>*/}

                                    {/*向路由组件传递state参数*/}
                                    <Link to={{pathname:'/home/message/detail',state:{id:messageObj.id,title:messageObj.title}}}>{messageObj.title}</Link>

                                    {/*push模式 replace模式*/}
                                    {/*<Link to={{pathname:'/home/message/detail',state:{id:messageObj.id,title:messageObj.title}}}>{messageObj.title}</Link>*/}

                                    &nbsp;<button onClick={()=>this.pushShow(messageObj.id,messageObj.title)}>点击push查看</button>
                                    &nbsp;<button onClick={()=>this.replaceShow(messageObj.id,messageObj.title)}>点击replace查看</button>
                                </li>
                            )
                        })
                    }
                </ul>
                <hr/>
                {/*声明接收param参数*/}
                {/*<Route path='/home/message/detail/:id/:title' component={Detail} />*/}

                {/*声明接收search参数   search参数无需声明接收*/}
                {/*<Route path='/home/message/detail' component={Detail} />*/}

                {/*声明接收state参数   state参数无需声明接收*/}
                <Route path='/home/message/detail' component={Detail} />


                <button onClick={this.back}>后退</button>&nbsp;
                <button onClick={this.forward}>前进</button>&nbsp;
                <button onClick={this.go}>Go</button>
            </div>
        );
    }
}

export default Message;