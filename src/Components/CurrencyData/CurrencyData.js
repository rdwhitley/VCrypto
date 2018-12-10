import React from 'react'
import './CurrencyData.css'
import {Link} from 'react-router-dom'
import DisplayBox from '../CurrencyDisplayBox/DisplayBox'

const currencyData = (props) => {
	return (
		<div class='light'>
			<div class='currency__info--header'>
				<Link to='/'><i className='fa fa-arrow-circle-left fa-2x'></i></Link>
				<img src ={props.logo} alt='logo'/>
				<div class='mg-left-right'>
					<h2 class='light-black'>{props.id}</h2>
					<h2 class=''>{props.symbol}</h2>
				</div>
				<h2 class='black'>${Number(props.price).format()}</h2> 
			</div>

			<DisplayBox currency={props.currency}/>

			<div class='currency__info--body'>
				<div class='three-column-row'>
					<div class='grid-item--1'>
						<h2>Rank  <span id='rank-circle'> {props.rank} </span> </h2>
					</div>
						
					<div class='grid-item--2'>
						<div class='market-cap'>
						<h2>Market Cap</h2>
						<h3 class='white'>
							<span>$ </span> 
							{Number(props.market).format()}
						</h3>
						</div>
						<div class='circulating-supply'>
						<h2>Circulating Supply</h2>
						<h3 class='white'>16,323,211 <span class='green'>{props.symbol}</span></h3>
						</div>
					</div>
						
					<div class='grid-item--3'>
						<div class='volume'>
							<h2>24th Volume</h2>
							<h3 class='white'>
								<span>$ </span> 
								{parseInt(props.volume).format()}
							</h3>
						</div>

						<div class='total_supply'>
							<h2>Total Supply</h2>
							<h3>
								<span class='white'>{Number(props.total).format()}</span> 
								<span class='green'> {props.symbol}</span>
							</h3>
						</div>
					</div>

				</div>
			</div>
		</div>
	)
}

export default currencyData