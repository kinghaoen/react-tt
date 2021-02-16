import React, {Component} from 'react';
import Home from './pages/Home';
import About from './pages/About';
import {Route,Switch,Redirect} from 'react-router-dom'; //Switch只展示第一个匹配上的组件
import MyNavLink from './components/MyNavLink';

import './App.css'

class App extends Component {
    render() {
        return (
            <div id="root">
                <div>
                    <div className="row">
                        <div className="col-xs-offset-2 col-xs-8">
                            <div className="page-header"><h2>React Router Demo</h2></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-2 col-xs-offset-2">
                            <div className="list-group">
                                {/*<a className="list-group-item" href="./About.html">About</a>*/}
                                {/*<a className="list-group-item active" href="./Home.html">Home</a>*/}

                                {/*<NavLink activeClassName="myNavLink" className="list-group-item" to="/About">About</NavLink>*/}
                                {/*<NavLink activeClassName="myNavLink" className="list-group-item" to="/Home">Home</NavLink>*/}

                                <MyNavLink to="/about" >About</MyNavLink>
                                <MyNavLink to="/home" >Home</MyNavLink>
                            </div>
                        </div>
                        <div className="col-xs-6">
                            <div className="panel">
                                <div className="panel-body">
                                    <Switch>
                                        <Route path="/about" component={About} />
                                        <Route path="/home" component={Home} />
                                        <Redirect to="/home" />
                                    </Switch>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;