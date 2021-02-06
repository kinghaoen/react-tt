import React,{Component} from "react";

import HeaderPart from "./components/HeaderPart/HeaderPart";
import LeftPart from "./components/LeftPart/LeftPart";


class App extends Component{
    render() {
        return (
            <div>
                <HeaderPart />
                <LeftPart />
            </div>
        )
    }
}

export default App;