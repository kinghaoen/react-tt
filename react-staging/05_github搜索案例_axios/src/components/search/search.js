import React, {Component} from 'react';

import axios from "axios";

class Search extends Component {
    searchWord= ()=>{
        const {inputNode} =this;
        //点击搜索按钮之后 更新状态
        this.props.updateStatus({isFirst: false,isLoading: true});
        axios.get(`http://localhost:3000/api1/search/users?q=${inputNode.value}`).then(
            response=>{
                //请求成功之后
                this.props.updateStatus({isLoading: false,users:response.data.items})
            },
            error=>{
                //请求失败之后 返回失败的错误信息
                this.props.updateStatus({isLoading: false,err:error.message})
            }
        )
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