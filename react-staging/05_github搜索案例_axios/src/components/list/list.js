import React, {Component} from 'react';

import './index.css'

class List extends Component {
    render() {

        const {isFirst,isLoading,err,users} =this.props;
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