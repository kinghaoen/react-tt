import React, {Component} from 'react';
import Count from "./container/Count";
import Person from "./container/Person";
class App extends Component {
  render() {
    return (
        <div>
          {/*从这里全局引入store*/}
          <Count />
          <Person />
        </div>
    );
  }
}

export default App;
