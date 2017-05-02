const initialState = {
	transactions: {
		data: []
	},
	currentBalance: 0
}

export default function reducer(state = initialState, action) {
	switch (action.type) {
		
		case "GET_TRANSACTIONS_FULFILLED":
			return Object.assign({}, state, { transactions: action.payload });

		case "GET_CURRENT_BALANCE_FULFILLED":
			return Object.assign({}, state, { currentBalance: action.payload.data[0].currentBalance });

		case "UPDATE_CURRENT_BALANCE":
			return Object.assign({}, state, { currentBalance: action.payload } );
	}
	return state;
}