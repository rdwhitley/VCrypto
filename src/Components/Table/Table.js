import React from 'react';
import './Table.css'
import CryptoRow from '../CryptoRow/CryptoRow'

const Table = (props) => {
	let pricejawn = `price_${props.currency}`
	let marketjawn = `market_cap_${props.currency}`
	return (
		<div className='table'>
				<p className='grey'>CRYPTOCURRENCY</p>
				<p className='grey'>PRICE</p>
				<p className='grey'>MARKET CAP</p>
				<p className='grey'>24H CHANGE</p>
				{
					props.cryptocurrency.map((item,index) => 
						<CryptoRow 
						rank={props.cryptocurrency[index].rank	} 
						name={props.cryptocurrency[index].id}
						price={props.cryptocurrency[index][pricejawn]}
						market={props.cryptocurrency[index][marketjawn]}
						change={props.cryptocurrency[index].percent_change_24h}
						/>
						)
				}
		</div>
	)
}

export default Table;
