import React, {Component} from 'react';
import Search from './components/search/search'
import List from './components/list/list'


class App extends Component {
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

    //stateObj 是state{}形式的返回值
    updateStatus= (stateObj)=>{
        this.setState(stateObj)
    }

    render() {
        return (
            <div className="container">
                <Search updateStatus={this.updateStatus} />
                <List {...this.state}/>
            </div>
        );
    }
}

export default App;