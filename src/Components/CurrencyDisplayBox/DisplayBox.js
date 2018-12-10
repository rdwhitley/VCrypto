import React from 'react'

const DisplayBox = (props) => {
	return (<div class='currency_box'>
        <p style={'usd' == props.currency ? {color: 'red'} : {color: 'black'}}>USD</p>
        <p style={'gbp' == props.currency ? {color: 'red'} : {color: 'black'}}>GBP</p>
        <p style={'eur' == props.currency ? {color: 'red'} : {color: 'black'}}>EUR</p>
        <p style={'jpy' == props.currency ? {color: 'red'} : {color: 'black'}}>JPY</p>
        <p style={'krw' == props.currency ? {color: 'red'} : {color: 'black'}}>KRW</p>
    </div>)
}

export default DisplayBox