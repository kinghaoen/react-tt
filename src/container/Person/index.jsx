import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createAddPersonAction} from "../../redux/actions/person";
import {nanoid} from 'nanoid';



class Person extends Component {
    //添加方法
    TianJia= ()=>{
        const name = this.nameNode.value;
        const age = this.ageNode.value;
        const personObj = {id:nanoid(),name,age}
        //console.log(personObj)
        this.props.addPersonFun(personObj);

        this.nameNode.value='';
        this.ageNode.value='';
    }
    render() {
        console.log("person组件",this.props)
        return (
            <div>
                <h2>我是Person组件</h2>
                <h2>求和：{this.props.he}</h2>

                <input type='text' ref={c => this.nameNode =c} placeholder='请输入姓名'/>
                <input type='text' ref={c => this.ageNode =c} placeholder='请输入年龄'/>
                <button onClick={this.TianJia}>添加</button>

                <ul>
                    {
                        this.props.persons.map((personObj)=>{
                            return <li key={personObj.id}> {personObj.name}===>{personObj.age}</li>
                        })
                    }

                </ul>
            </div>
        );
    }
}

export default connect(
    state=>({persons:state.Ren,he:state.QiuHe}),
    {addPersonFun:createAddPersonAction}
)(Person);