import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import './App.css';

import Header from './Components/Header/Header'
import Table from './Components/Table/Table'
import CryptoRow from './Components/CryptoRow/CryptoRow'

import bitcoin from './Assets/Images/bitcoin.png'
import bitcoin_sv from './Assets/Images/bitcoin_sv.png'
import eos from './Assets/Images/eos.jpg'
import ethereum from './Assets/Images/ethereum.png'
import ripple from './Assets/Images/ripple.png'
import stellar from './Assets/Images/stellar.png'
import tether from './Assets/Images/tether.png'
import bitcoin_cash from './Assets/Images/bitcoin_cash.jpeg'
import tron from './Assets/Images/tron.jpg'
import litecoin from './Assets/Images/litecoin.jpg'


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
    currency: 'usd',
    logos: [bitcoin_cash,litecoin,bitcoin,bitcoin_sv,eos,ethereum,ripple,stellar,tether,tron]
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
      <BrowserRouter>
      <div className="App">
        <Header />
        <Table 
        cryptocurrency={this.state.cryptocurrency} 
        currency={this.state.currency}
        logos={this.state.logos}
        />
      </div>
      </BrowserRouter>



    );
  }
}

export default App;
