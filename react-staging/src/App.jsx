import React, {Component} from 'react';
import { Button, DatePicker, Space } from 'antd';
import './App.less';

//import 'antd/dist/antd.css';

const { RangePicker } = DatePicker;
class App extends Component {
    render() {
        return (
            <div>
                <Button type="primary">Button</Button>


                <Space direction="vertical" size={12}>
                    <RangePicker />
                    <RangePicker showTime />
                    <RangePicker picker="week" />
                    <RangePicker picker="month" />
                    <RangePicker picker="year" />
                </Space>
            </div>
        );
    }
}

export default App;