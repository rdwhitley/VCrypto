import React from 'react';
import './CryptoRow.css'
import '../Table/Table.css'
import {Link} from 'react-router-dom'

//Variable to hold the image path Index defaulted to 0 
let imagePathIndex = 0;

const findImageInPath = (name,logosArray) => {

	//1. Make a copy of image array with the names clipped
	let newImageArray = logosArray.map(logo => {
			 let start = logo.lastIndexOf("/")
   			 let end = logo.indexOf(".")
   			 return logo.slice(start + 1,end).toLowerCase()
	})
	//2. Find index of currency logo in logos Array
	let index = newImageArray.indexOf(name)

	//3. Set image path index
	imagePathIndex = index

	return index
	
}

const findCurrencyLogo = (name,logos) => {
	//1.Replace all - in name with _ and make it lowercase for storage reasons so we dont break stuff and cry
	let newName = name.replace('-','_')


	//2. Get index of currency in logos array
	let imageIndex = findImageInPath(newName,logos)
		
	return logos[imageIndex]

}
const CryptoRow = (props) => {
	let image_path = findCurrencyLogo(props.name,props.logos)
	const price = parseFloat(props.price).toFixed(3)
	return (
		<Link to={{ 
			pathname: `/currency/${props.name}`, 
			state: {
				marketCap: props.market, 
				logo: props.logos[imagePathIndex], 
				volume: props.volume, 
				symbol: props.symbol, 
				total: props.total, 
				rank: props.rank, 
				price: price
				}
			}} 
			className='row'>

			<div className='row'>
				<div className='row__item--one'>
				{props.rank}
				<img src={image_path} />
				{props.name}
				</div>
				<div className='row__item--two'>
				${price}
				</div>
				<div className='row__item--three'> 
				${parseInt(props.market)}
				</div>
				<div className='row__item--four'>
				{props.change}
				</div>
			</div>
		</Link>
	)
}

export default CryptoRow;