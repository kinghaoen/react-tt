import React, {Component} from 'react';
import PubSub from 'pubsub-js';

import './index.css'

class List extends Component {

    state = {
        //第一次加载
        isFirst: true,
        //开始搜索
        isLoading: false,
        //请求出错
        err: false,
        //请求返回的结果
        users: []
    }

    // 组件挂载 订阅
    componentDidMount() {
        this.token = PubSub.subscribe('SEARCH_TOPIC', (msg, stateObj)=> {
            this.setState(stateObj)
        });
    }

    //卸载组件 取消订阅
    componentWillUnmount() {
        PubSub.unsubscribe(this.token);
    }

    render() {
        const {isFirst,isLoading,err,users} =this.state;
        return (
            <div className="row">
                {
                    isFirst? <h2>欢迎搜索</h2>:
                        isLoading? <h2>Loading...</h2>:
                            err? <h2 style={{color:"red"}}>{err}</h2>:
                                users.length===0? <h2>检索字符有所限制,不能中文</h2>:
                                    users.map((userObj)=>{
                                        return(
                                            <div key={userObj.id} className="card">
                                                <a href={userObj.html_url} target="_blank" rel='noreferrer noopener'>
                                                    <img src={userObj.avatar_url} style={{width: 100}} alt={'图片加载失败'}/>
                                                </a>
                                                <p className="card-text">{userObj.login}</p>
                                            </div>
                                        )
                                    })
                }

            </div>
        );
    }
}

export default List;