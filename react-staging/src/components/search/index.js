import React, {Component} from 'react';

class Index extends Component {
    searchWord= ()=>{
        const {inputNode} =this;
        console.log(inputNode.value)
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

export default Index;