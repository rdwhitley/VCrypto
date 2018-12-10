import React from 'react';
import './Header.css'

const Header = (props) => {
	return (
		<div className='header'>
			{/*Header Title*/}
			<h1 className='title'>VFCrypto</h1>
			{/*Drop Down Menu*/}

			 <div class='dropdown'>
			 <select id='currency_dropdown' onChange={(e) => props.changeCurrency(e)}>
		  		<option value='usd'>USD</option>
		  		<option value='gbp'>GBP</option>
		  		<option value='eur'>EUR</option>
		 		<option value='jpy'>JPY</option>
		 		<option value='krw'>KRW</option>
			</select> 
			</div>
		</div>
	)
}

export default Header;