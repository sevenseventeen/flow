import axios from "axios";
import store from '../store/store';

export function updateFormValue(inputName, inputValue) {
	return function(dispatch) {
		dispatch({
			type: "UPDATE_FORM_VALUE",
			payload: {
				inputName: inputName,
				inputValue: inputValue
			}
		})
  	}
}

export function getTransactions() {
	return function(dispatch) {
		dispatch({
			type: "GET_TRANSACTIONS",
			payload: axios.get('/api/get/transactions')
		})
  	}
}

export function getCurrentBalance() {
	return function(dispatch) {
		dispatch({
			type: "GET_CURRENT_BALANCE",
			payload: axios.get('/api/get/current-balance')
		})
  	}
}

export function updateCurrentBalance(currentBalance) {
	return function(dispatch) {
		dispatch({
			type: "UPDATE_CURRENT_BALANCE",
			payload: currentBalance
		})
  	}
}

export function enterTransaction(inputName, inputValue) {
	let transactionFormData = store.getState().forms.transactionForm;
	transactionFormData['currentBalance'] = store.getState().transactions.currentBalance;
	return function(dispatch) {
		dispatch({
			type: "ENTER_TRANSACTION",
			payload: axios.post('/api/post/transaction', transactionFormData)
		})
  	}
}