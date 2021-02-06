import React from "react";

import LeftCss from './left.module.css';

class LeftPart extends React.Component{
    render() {
        return <h2 className={LeftCss.bgk}>HeaderPart</h2>
    }
}

export default LeftPart;