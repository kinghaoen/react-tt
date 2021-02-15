import React, {Component} from 'react';

const DetailData =[
    {id:'01',content:'我爱我的祖国01'},
    {id:'02',content:'我爱我的祖国02'},
    {id:'03',content:'我爱我的祖国03'}
]

class Detail extends Component {

    render() {
        const {id,title} =this.props.match.params;
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