import React from 'react'
import './CurrencyData.css'
import { connect } from 'react-redux'
import { changeCurrency } from '../../Actions/currencyAction'

const currencyData = (props) => {
	console.log(props)
	return (
		<div>
			<div class='currency__info--header'>
				<h2><a href='/'>Home</a></h2>
				<img src ={props.logo} />
				<div class='currency__info--header-logo'>
				<h2>{props.id}</h2>
				<h2>{props.symbol}</h2>
				</div>
				<h2>${props.price}</h2>
				{/*Drop Down Menu*/}
			 		<select id='currency_dropdown'>
		  				<option>USD</option>
		  				<option>GBP</option>
		  				<option>EUR</option>
		 				<option>JPY</option>
		 				<option>KRW</option>
					</select> 
			</div>

			<div class='currency__info--body'>
				<div class='three-column-row'>
					<div class='grid-item--1'>
						<h2>Rank {props.rank}</h2>
					</div>
						
					<div class='grid-item--2'>
						<div class='market-cap'>
						<h2>Market Cap</h2>
						<h3>${props.market}</h3>
						</div>
						<div class='circulating-supply'>
						<h2>Circulating Supply</h2>
						<h3>16,323,211 {props.symbol}</h3>
						</div>
					</div>
						
					<div class='grid-item--3'>
						<div class='volume'>
							<h2>24th Volume</h2>
							<h3>${props.volume}</h3>
						</div>

						<div class='total_supply'>
							<h2>Total Supply</h2>
							<h3>{props.total} {props.symbol}</h3>
						</div>
					</div>

				</div>
			</div>
		</div>
	)
}

export default connect(null, {changeCurrency})(currencyData)