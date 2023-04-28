import React, { useState } from "react";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
 
  render() {
    
     return <div className="App">
     <p>Counter={this.state.count}</p>
     <button onClick={() => this.setState({ count: this.state.count + 1 })}>
       Increase
     </button>
     <button onClick={() => this.setState({ count: this.state.count - 1 })}>
       Decrease
     </button>
   </div>
  }
}
 
export default App;