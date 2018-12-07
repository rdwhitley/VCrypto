import React from 'react';
import './Header.css'

const Header = () => {
	return (
		<div className='header'>
			{/*Header Title*/}
			<h1 className='title'>VFCrypto</h1>
			{/*Drop Down Menu*/}
			 <select className='currency_dropdown'>
  				<option>USD</option>
  				<option>GBP</option>
  				<option>EUR</option>
 				<option>JPY</option>
 				<option>KRW</option>
			</select> 
		</div>
	)
}

export default Header;