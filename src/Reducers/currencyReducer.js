import {CHANGE_CURRENCY} from '../Actions/types'

const initialState = {
	items: [],
	item: {}
}

export default function(state = initialState, action) {

	switch(action.type) {

		case CHANGE_CURRENCY:
			return {
				...state,
				items: action.payload
			}

		default:
			return state
	}
}