import React from "react";
import Heading from "./Heading";
import Para from "./Para";
import List from "./List";
import ReactDOM from "react-dom";

 class App extends React.Component{
    render(){
        return(
            <>
            <Heading/>
            <Para/>
            <List/>
            </>
        )
    }
 }

 export default App;