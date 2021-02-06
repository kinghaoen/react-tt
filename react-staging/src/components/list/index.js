import React, {Component} from 'react';

import './index.css'

class Index extends Component {
    render() {
        return (
            <div className="row">
                <div className="card">
                    <a href="https://github.com/reactjs" target="_blank" rel='noreferrer noopener'>
                        <img src="https://avatars.githubusercontent.com/u/1" style={{width: 100}} alt={'图片加载失败'}/>
                    </a>
                    <p className="card-text">reactjs</p>
                </div>
                <div className="card">
                    <a href="https://github.com/reactjs" target="_blank" rel='noreferrer noopener'>
                        <img src="https://avatars.githubusercontent.com/u/2" style={{width: 100}} alt={'图片加载失败'}/>
                    </a>
                    <p className="card-text">reactjs</p>
                </div>
                <div className="card">
                    <a href="https://github.com/reactjs" target="_blank" rel='noreferrer noopener'>
                        <img src="https://avatars.githubusercontent.com/u/3" style={{width: 100}} alt={'图片加载失败'}/>
                    </a>
                    <p className="card-text">reactjs</p>
                </div>
                <div className="card">
                    <a href="https://github.com/reactjs" target="_blank" rel='noreferrer noopener'>
                        <img src="https://avatars.githubusercontent.com/u/4" style={{width: 100}} alt={'图片加载失败'}/>
                    </a>
                    <p className="card-text">reactjs</p>
                </div>
                <div className="card">
                    <a href="https://github.com/reactjs" target="_blank" rel='noreferrer noopener'>
                        <img src="https://avatars.githubusercontent.com/u/5" style={{width: 100}} alt={'图片加载失败'}/>
                    </a>
                    <p className="card-text">reactjs</p>
                </div>
            </div>
        );
    }
}

export default Index;