import React, {Component} from 'react';
import axios from "axios";


export default class App extends Component {

    getStudents= ()=>{
        axios.get('http://localhost:3000/api1/students').then(
            response => {
                console.log('学生信息：',response)
            },
            err=>{
                console.log('获取学生信息失败',err)
            })
    }

    getCars= ()=>{
        axios.get('http://localhost:3000/api2/cars').then(
            response => {
                console.log('汽车信息：',response)
            },
            err=>{
                console.log('获取汽车信息失败',err)
            })
    }

    render() {

        return (
            <div>
                <button onClick={this.getStudents}>获取学生信息</button>
                <button onClick={this.getCars}>获取学生信息</button>
            </div>
        );
    }
}
