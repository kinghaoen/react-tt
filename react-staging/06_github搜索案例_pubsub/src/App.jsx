import React, {Component} from 'react';
import Search from './components/search/search'
import List from './components/list/list'


class App extends Component {

    render() {
        return (
            <div className="container">
                <Search />
                <List />
            </div>
        );
    }
}

export default App;