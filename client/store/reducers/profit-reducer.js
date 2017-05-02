import moment from 'moment';

const initialState = {
	profit: 0
}

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case "GET_PROFIT_FULFILLED":
			let startBalance = action.payload.data[0].currentBalance;
			let endBalance = action.payload.data[1].currentBalance;
			let profit = +endBalance-startBalance;
			return Object.assign({}, state, { profit: profit });
	}
	return state;
}