import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header'
import Table from './Components/Table/Table'
import CryptoRow from './Components/CryptoRow/CryptoRow'

// import bitcoin from './Assets/Images/Bitcoin.png'
// import bitcoinSv from './Assets/Images/bitcoinSV.png'
// import eos from './Assets/Images/eos.jpg'
// import ethereum from './Assets/Images/ethereum.png'
// import ripple from './Assets/Images/ripple.png'
// import stellar from './Assets/Images/stellar.png'
// import tether from './Assets/Images/tether.png'
// import teon from './Assets/Images/tron.jpg'



class App extends Component {

  /*I want to keep track of the current top 10 crytpcurrencies, 
  the current selected currency, and available currency logos

  Helper code when I add logos back 
  
  The code below well help find the name of an image by using a regex on the relative path
  // let start = Pic.lastIndexOf("/")
   // let end = Pic.indexOf(".")
   // console.log(Pic.slice(start + 1,end))
  */ 
  state = {
    cryptocurrency: [],
    currency: 'usd'
    // logos: [bitcoin,bitcoinSv,eos,ethereum,ripple,stellar,tether,teon]
  }

  componentDidMount() {
    //1. Get data on top 10 cryptocurrencies from Coinmarket API for current selected currency
    fetch(`https://api.coinmarketcap.com/v1/ticker/?limit=10&convert=${this.state.currency}`)
      .then(resp => resp.json())
      //2. Send data to state
      .then(data => this.setState({cryptocurrency: data}))
  }
  render() {

    return (
      <div className="App">
        <Header />
        <Table cryptocurrency={this.state.cryptocurrency} currency={this.state.currency}/>
      </div>
    );
  }
}

export default App;
