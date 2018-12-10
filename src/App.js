import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import './App.css';

import Header from './Components/Header/Header'
import CryptoRow from './Components/CryptoRow/CryptoRow'
import CurrencyData from './Components/CurrencyData/CurrencyData'
import Displaybox from './Components/CurrencyDisplayBox/DisplayBox'

import bitcoin from './Assets/Images/Bitcoin.png'
import bitcoin_sv from './Assets/Images/bitcoin_sv.png'
import eos from './Assets/Images/eos.jpg'
import ethereum from './Assets/Images/ethereum.png'
import ripple from './Assets/Images/ripple.png'
import stellar from './Assets/Images/stellar.png'
import tether from './Assets/Images/tether.png'
import bitcoin_cash from './Assets/Images/bitcoin_cash.jpeg'
import tron from './Assets/Images/tron.jpg'
import litecoin from './Assets/Images/litecoin.jpg'

Number.prototype.format = function(){
   return this.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
};

class App extends Component {

  state = {
    cryptocurrency: [],
    currency: 'usd',
    logos: [bitcoin_cash,litecoin,bitcoin,bitcoin_sv,eos,ethereum,ripple,stellar,tether,tron],
    lastUpdate: ''
  }

  //This function will retrieve data on the top 10 cryptocurrencies
  getCryptos() {
       //1. Get data on top 10 cryptocurrencies from Coinmarket API for current selected currency
      fetch(`https://api.coinmarketcap.com/v1/ticker/?limit=10&convert=${this.state.currency}`)
      .then(resp => resp.json())
      //2. Send data to state
      .then(data => this.setState({cryptocurrency: data}))
  }

  //Once the component is mounted fill state with data on cryptocurrencies every 60 seconds
  componentDidMount() {
    this.getCryptos()
    this.interval = setInterval(() =>  {
      this.getCryptos()
    }, 60000)
  
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  //This Function will handle the changing of currencies
  changeCurrency = (event) => {
      this.setState({currency: event.target.value}, () => {
        this.getCryptos()
      })
  }

  render() {
    return (

        <BrowserRouter>
          <div className="App">
            <Route path='/currency/:id/' exact component={(props) => {
              //Redux Would be a better solution here but I'm having trouble with Redux
              return(
                <CurrencyData 
                  id={props.match.params.id}
                  total={props.location.state.total}
                  volume={props.location.state.volume}
                  symbol={props.location.state.symbol}
                  market={props.location.state.marketCap}
                  logo={props.location.state.logo}
                  price={props.location.state.price}
                  rank={props.location.state.rank}
                  changeCurrency={this.changeCurrency}

                />
              )}}
             />

            <Route exact path={'/'} render={() => {

              //Variables to hold a dynamic string for data fields
              let priceTag = `price_${this.state.currency}`
              let marketTag = `market_cap_${this.state.currency}`
              let volume = `24h_volume_${this.state.currency}`

              return(
                  <div>
                    
                    <Displaybox currency={this.state.currency} />
                    
                    <div className='mg-btm'>
                      <Header changeCurrency={this.changeCurrency}/>
                    </div>

                    <div className='table'>
                      <p className='grey'>CRYPTOCURRENCY</p>
                      <p className='grey'>PRICE</p>
                      <p className='grey'>MARKET CAP</p>
                      <p className='grey'>24H CHANGE</p>
                    </div>

                    <div className='currency-data'>
                    {this.state.cryptocurrency.map((item,index) =>   
                      <CryptoRow
                      volume={this.state.cryptocurrency[index][volume]}
                      symbol={this.state.cryptocurrency[index].symbol}
                      total={this.state.cryptocurrency[index].total_supply} 
                      logos={this.state.logos}
                      rank={this.state.cryptocurrency[index].rank  } 
                      name={this.state.cryptocurrency[index].id}
                      price={this.state.cryptocurrency[index][priceTag]}
                      market={this.state.cryptocurrency[index][marketTag]}
                      change={this.state.cryptocurrency[index].percent_change_24h}
                      />)}
                    </div>

                  </div>
              )}} 
            />

          </div>
        </BrowserRouter>




    );
  }
}

export default App;
