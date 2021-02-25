import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import store from "./redux/store";
import {Provider} from 'react-redux'
/*
    不用手动监测，改用Provider
 */

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

//store订阅 redux变化 则调用ReactDOM.render
/*
    使用react-redux之后不用手动监测 容器connect()()自动监测
 */
// store.subscribe(()=>{
//     ReactDOM.render(<App />,document.getElementById('root'));
// })