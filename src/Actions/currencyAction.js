import {CHANGE_CURRENCY} from './types'

export const changeCurrency = dispatch => {
	dispatch({
		type: CHANGE_CURRENCY,
		payload: ['USD', 'GBP', 'EUR', 'JPY', 'KRW']
	})
}