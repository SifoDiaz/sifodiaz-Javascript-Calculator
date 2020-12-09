import React from "react";
import "./App.css";
import Calculator from "./Calculator";

class App extends React.Component {
  render() {
    return (
      <div>
        <Calculator />
        <div id="information">
          <p>Javascript Calculator</p>
        </div>
      </div>
    );
  }
}

export default App;
