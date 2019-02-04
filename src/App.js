import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js'
import PageContainer from './components/PageContainer.js'

class App extends Component {

  render() {
    return (
      <div className="app-container">
        <Header />
        <PageContainer />
      </div>
    );
  }
}

export default App;
