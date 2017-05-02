import moment from 'moment';

const initialState = {
	transactionForm: {
		propertyName: '2750 Alsace',
		unitName: '2752',
		transactionType: 'Rent',
		transactionPayee: 'The Hill Company',
		transactionAmount: '1200',
		transactionDate: moment().format('YYYY-MM-DD')
	}
}

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case "UPDATE_FORM_VALUE":
			console.log("UPDATE FORM VALUE - REDUCER");
			let inputName = action.payload.inputName; 
			let inputValue = action.payload.inputValue;
			let transactionFormData = Object.assign({}, state.transactionForm, { [inputName]:inputValue });
			return Object.assign({}, state, { transactionForm: transactionFormData });
	}
	return state;
}