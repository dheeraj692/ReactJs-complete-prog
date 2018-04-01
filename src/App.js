import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Digitalclock from './Digitalclock';
import Events from './Events';
import Forms from './Forms';

class App extends Component {

  state = {
    toggle: true
  }

  toggleFn =() => {
    this.setState({
      toggle: !this.state.toggle
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* <Welcome></Welcome> */}
          <Welcome text="Welcome to use Props"/>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        {this.state.toggle && <p>this should display</p>}
        <button onClick={this.toggleFn}>Hide/display</button>
        {/* <Digitalclock/> */}
        <Events/>
        <Forms/>
      </div>

      
    );
  }
}

/**Using Props */
class Welcome extends Component {
  render() {
    const {text} = this.props;
    return (
      // <h1 className="App-title">{this.props.text}</h1>
      <h1 className="App-title">{text}</h1>
    );
  }
}

/**Using const */
// let welcomeMsg = "Welcome to React. First code";

// class Welcome extends Component {
//   render() {
//     return (
//       <h1 className="App-title">{welcomeMsg}</h1>
//     );
//   }
// }

export default App;
