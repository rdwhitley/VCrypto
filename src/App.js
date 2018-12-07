import React, { Component } from 'react';
import Header from './Components/Header/Header'
import Table from './Components/Table/Table'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Table />
      </div>
    );
  }
}

export default App;
