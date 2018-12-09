import React from 'react';
import './Table.css'
import CryptoRow from '../CryptoRow/CryptoRow'
import {Route} from 'react-router-dom'
import CurrencyData from '../CurrencyData/CurrencyData'
import Header from '../Header/Header'

let changeCurrency;

const Table = (props) => {
	// console.log(props.changeCurrency)
	changeCurrency = props.changeCurrency
	console.log(changeCurrency)
	let pricejawn = `price_${props.currency}`
	let marketjawn = `market_cap_${props.currency}`
	let volume = `24h_volume_${props.currency}`

	return ( 
		<div>
		<Route path='/' exact render={() => {
			return (
				<div>
					<Header />				
					<div className='table'>
					<p className='grey'>CRYPTOCURRENCY</p>
					<p className='grey'>PRICE</p>
					<p className='grey'>MARKET CAP</p>
					<p className='grey'>24H CHANGE</p>
					{
						props.cryptocurrency.map((item,index) => 
							<CryptoRow
							volume={props.cryptocurrency[index][volume]}
							symbol={props.cryptocurrency[index].symbol}
							total={props.cryptocurrency[index].total_supply} 
							logos={props.logos}
							changeCurrency={props.changeCurrency}
							rank={props.cryptocurrency[index].rank	} 
							name={props.cryptocurrency[index].id}
							price={props.cryptocurrency[index][pricejawn]}
							market={props.cryptocurrency[index][marketjawn]}
							change={props.cryptocurrency[index].percent_change_24h}
							/>
						)
					}
					</div>
				</div>
		)}} />

		<Route path='/currency/:id/' exact component={(props) => {
			return <CurrencyData 
			id={props.match.params.id}
			total={props.location.state.total}
			volume={props.location.state.volume}
			symbol={props.location.state.symbol}
			market={props.location.state.marketCap}
			logo={props.location.state.logo}
			price={props.location.state.price}
			rank={props.location.state.rank}
			/>
		}} />


		</div>	
	)
}

export default Table;
