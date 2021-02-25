import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createIncrementAction} from "../../redux/count_action";


class JiaFa extends Component {
    jia= ()=>{
        this.props.increment(1);
    }

    render() {
        return (
            <div>
                <h2>求和：{this.props.he}</h2>
                <button onClick={this.jia}>点我加一</button>
            </div>
        );
    }
}

export default connect(state=>({he:state}),{increment:createIncrementAction})(JiaFa);
