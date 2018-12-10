import React from 'react';
import './CryptoRow.css'
import {Link} from 'react-router-dom'

//Variable to hold the image path Index defaulted to 0 
let imagePathIndex = 0;

/*Function to find index of given name in the Logos array */
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

// Function to get an image from the logos array
const findCurrencyLogo = (name,logos) => {
	//1.Replace all - in name with _ and make it lowercase for storage reasons so we dont break stuff and cry
	let newName = name.replace('-','_')


	//2. Get index of currency in logos array
	let imageIndex = findImageInPath(newName,logos)
		
	return logos[imageIndex]

}
const CryptoRow = (props) => {
	let goodStatus = {
		color : 'green'
	}

	let badStatus = {
		color : 'red'
	}

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
			className='row border-btm'>

			<div className='row'>
				<div className='row__item--one'>
				{props.rank}
				<img src={image_path} />
				{props.name}
				</div>
				<div className='row__item--two'>
					<span className='light'>$</span> {Number(price).format()}
				</div>
				<div className='row__item--three'> 
					<span className='light'>$</span> {parseInt(props.market).format()}
				</div>
				<div 
				className='row__item--four'
				style={parseInt(props.change) > 0 ? goodStatus : badStatus}
				>
				{props.change}%
				{parseInt(props.change) > 0 ? <i className='fa fa-arrow-up'></i> : <i className='fa fa-arrow-down'> </i>}
				</div>
			</div>
		</Link>
		
	)
}

export default CryptoRow;