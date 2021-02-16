import React, {Component} from 'react';
import News from "./News";
import Message from "./Message";
import MyNavLink from "../../components/MyNavLink";
import {Switch,Route,Redirect} from "react-router";

class Home extends Component {
    render() {
        return (
            <div>
                <h3>我是Home的内容</h3>
                <div>
                    <ul className="nav nav-tabs">
                        <li>
                            {/*push模式 replace模式*/}
                            <MyNavLink replace to="/home/news">News</MyNavLink>
                        </li>
                        <li>
                            {/*push模式 replace模式*/}
                            <MyNavLink replace to="/home/message">Message</MyNavLink>
                        </li>
                    </ul>
                    <Switch>
                        <Route path="/home/news" component={News} />
                        <Route path="/home/message" component={Message} />
                        <Redirect to="/home/message" />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default Home;