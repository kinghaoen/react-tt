import React, {Component} from 'react';

import HeaderCss from './header.module.css';

class HeaderPart extends Component {
    render() {
        return (
            <div>
                <h2 className={HeaderCss.gre}>HeaderPart</h2>
            </div>
        );
    }
}

export default HeaderPart;
