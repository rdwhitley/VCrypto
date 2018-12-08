import React from 'react';
import './CryptoRow.css'
import '../Table/Table.css'

const CryptoRow = (props) => {
	return (
		<div className='test'>
				<div className='row__item--one'>
				{props.rank}
				{props.name}
				</div>
				<div className='row__item--two'>
				${parseFloat(props.price).toFixed(3)}
				</div>
				<div className='row__item--three'> 
				${parseInt(props.market)}
				</div>
				<div className='row__item--four'>
				{props.change}
				</div>
		</div>
	)
}

export default CryptoRow;