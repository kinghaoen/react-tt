import React, {Component} from 'react';
import PubSub from 'pubsub-js';


class Search extends Component {
    searchWord=async ()=>{
        const {inputNode} =this;
        //点击搜索按钮之后 更新状态
        PubSub.publish('SEARCH_TOPIC', {isFirst: false,isLoading: true});
        //this.props.updateStatus({isFirst: false,isLoading: true});
        // axios.get(`http://localhost:3000/api1/search/users2?q=${inputNode.value}`).then(
        //     response=>{
        //         //请求成功之后
        //         PubSub.publish('SEARCH_TOPIC', {isLoading: false,users:response.data.items});
        //         //this.props.updateStatus({isLoading: false,users:response.data.items})
        //     },
        //     error=>{
        //         //请求失败之后 返回失败的错误信息
        //         PubSub.publish('SEARCH_TOPIC', {isLoading: false,err:error.message});
        //         //this.props.updateStatus({isLoading: false,err:error.message})
        //     }
        // )
        //使用fetch的方式请求数据 （未优化）
        /*fetch(`http://localhost:3000/api1/search/users2?q=${inputNode.value}`)
            .then(
            response=>{
                console.log("连接服务器成功",response);
                return response.json();
            },
            error=>{
                console.log("连接服务器失败");
                return new Promise(()=>{});
            })
            .then(
            response=>{
                console.log("请求数据成功",response)
            },
            error=>{
                console.log("请求数据失败")
            })
            .catch((error)=>{
                console.log('请求失败',error)
            })*/
        //使用fetch的方式请求数据 （优化）

        try{
            const response = await fetch(`http://localhost:3000/api1/search/users2?q=${inputNode.value}`);
            const data = await response.json();
            console.log(data)
            PubSub.publish('SEARCH_TOPIC', {isLoading: false,users:data.items});
        }
        catch (error) {
            console.log('获取数据失败',error)
            PubSub.publish('SEARCH_TOPIC', {isLoading: false,err:error.message});
        }

    }


    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input ref={(currentNode)=>{this.inputNode = currentNode}} type="text" placeholder="enter the name you search"/>&nbsp;
                    <button onClick={this.searchWord}>Search</button>
                </div>
            </section>
        );
    }
}

export default Search;