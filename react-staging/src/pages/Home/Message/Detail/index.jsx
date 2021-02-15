import React, {Component} from 'react';
import qs from 'querystring';

const DetailData =[
    {id:'01',content:'我爱我的祖国01'},
    {id:'02',content:'我爱我的祖国02'},
    {id:'03',content:'我爱我的祖国03'}
]

class Detail extends Component {

    render() {
        //接收param参数
        // const {id,title} =this.props.match.params;

        const {search} =this.props.location;
        const {id,title} = qs.parse(search.slice(1));
        const findDetail = DetailData.find((detailObj)=>{
            return detailObj.id === id;
        })
        return (
            <ul>
                <li>Id: {id}</li>
                <li>Title: {title}</li>
                <li>Content: {findDetail.content}</li>
            </ul>
        );
    }
}

export default Detail;