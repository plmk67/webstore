import React, { Component } from 'react';
import { BrowserRouter }from 'react-router-dom';
import Layout from './components/Layout/Layout'
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Layout />
        </div>
      </BrowserRouter>
      
    );
  }
}

export default App;
