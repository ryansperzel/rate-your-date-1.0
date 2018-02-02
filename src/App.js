import React, { Component } from 'react'
import { Route } from "react-router-dom"
import Landing from './components/Landing'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path='/' render={props => <Landing {...props} />}/>
      </div>
    );
  }
}

export default App;
