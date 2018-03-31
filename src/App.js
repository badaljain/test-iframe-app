import React, { Component } from 'react';
import logo from './logo.svg';
import Iframe from 'react-iframe'
import './App.css';

class App extends Component {
  render() {
    return (
      <div style={{height: '89%'}}>
        <header className="App-header">
          <h1 className="App-title">PARENT APP - Header</h1>
        </header>
        <Iframe url='http://taapi-ui-resources.s3-website-us-west-2.amazonaws.com' allowFullScreen position='relative'/>
        <header className="App-header">
          <h1 className="App-title">PARENT APP - Footer</h1>
        </header>
      </div>
    );
  }
}

export default App;
