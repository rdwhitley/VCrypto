import React from 'react';
import './Table.css'
import CryptoRow from '../CryptoRow/CryptoRow'
import {Route} from 'react-router-dom'
import CurrencyData from '../CurrencyData/CurrencyData'
import Header from '../Header/Header'

// <Route path='/yood' exact render={() => <h1>Yurd</h1>} />

const Table = (props) => {
	let pricejawn = `price_${props.currency}`
	let marketjawn = `market_cap_${props.currency}`
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
							logos={props.logos}
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

		<Route path='/currency/:id/:image_index' exact component={(props) => <CurrencyData id={props.match.params.id} image_index={props.match.params.image_index} />} />


		</div>	
	)
}

export default Table;
