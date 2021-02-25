import React, {Component} from 'react';
import Count from "./container/Count";
import store from "./redux/store";
class App extends Component {
  render() {
    return (
        <div>
          {/*从这里全局引入store*/}
          <Count store={store}/>
        </div>
    );
  }
}

export default App;
