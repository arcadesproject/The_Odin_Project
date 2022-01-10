import React, { Component } from 'react';
import Counter from './Counter';

class App extends Component {
  constructor(props) {

  super(props)

    this.state = {
      mount: true,
      ignoreProp: 0,
      seed: 40,
    }
  }

  mountCounter = () => this.setState({mount: true})
  unmountCounter = () => this.setState({mount: false})

  ignoreProp = () => this.setState({ ignoreProp: Math.random()})
  seedGenerator = () => this.setState({seed: Number.parseInt(Math.random() * 100)})

  render () {
    return (
      <div className="App">
      <button onClick={this.mountCounter} disabled={this.state.mount}>Mount Counter</button>
      <button onClick={this.unmountCounter} disabled={!this.state.mount}>Unmount Counter</button>
      <button onClick={this.ignoreProp}>Ignore Prop</button>
      <button onClick={this.seedGenerator}>Generate Seed</button>
      {this.state.mount ?  
      <Counter 
        ignoreProp = {this.state.ignoreProp}
        seed={this.state.seed}
      /> 
      : null}
      </div>
    );
  }
}

export default App;
